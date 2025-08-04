// src/provider/AuthProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile with name
      await updateProfile(userCredential.user, {
        displayName: name
      });
      
      // Return updated user
      return { ...userCredential.user, displayName: name };
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    createUser,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;