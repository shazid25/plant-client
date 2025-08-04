// src/components/Navbar/Navbar.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(() => {
    setIsMounted(true);
  }, [user]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      alert('You logged out successfully');
      setMobileMenuOpen(false);
      navigate('/auth/login'); // 🔁 Redirect after logout
    } catch (error) {
      console.error('Logout Error:', error.message);
    }
  };

  const links = (
    <>
      <Link
        to="/"
        onClick={() => setMobileMenuOpen(false)}
        className="px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition flex items-center space-x-2"
      >
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link
        to="/plant"
        onClick={() => setMobileMenuOpen(false)}
        className="px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition flex items-center space-x-2"
      >
        <i className="fas fa-leaf"></i>
        <span>All Plants</span>
      </Link>
      <Link
        to="/add/yourPlant"
        onClick={() => setMobileMenuOpen(false)}
        className="px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition flex items-center space-x-2"
      >
        <i className="fas fa-plus-circle"></i>
        <span>Add Plant</span>
      </Link>
      <Link
        to="/my/plant"
        onClick={() => setMobileMenuOpen(false)}
        className="px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition flex items-center space-x-2"
      >
        <i className="fas fa-seedling"></i>
        <span>My Plants</span>
      </Link>
    </>
  );

  const authButtons = user ? (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition text-white font-medium flex items-center space-x-2"
    >
      <i className="fas fa-sign-out-alt"></i>
      <span>Logout</span>
    </button>
  ) : (
    <>
      <Link
        to="/auth/login"
        onClick={() => setMobileMenuOpen(false)}
        className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:bg-opacity-10 transition flex items-center space-x-2"
      >
        <i className="fas fa-sign-in-alt"></i>
        <span>Login</span>
      </Link>
      <Link
        to="/auth/registation"
        onClick={() => setMobileMenuOpen(false)}
        className="px-4 py-2 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition flex items-center space-x-2"
      >
        <i className="fas fa-user-plus"></i>
        <span>Register</span>
      </Link>
    </>
  );

  return (
    <header
      className="bg-gradient-to-r from-primaryDark to-primary text-white py-4 shadow-lg sticky top-0 z-50"
      style={{ backgroundImage: 'linear-gradient(to right, #1B5E20, #2E7D32)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <i className="fas fa-leaf text-3xl text-yellow-400"></i>
            <h1 className="text-2xl font-bold font-montserrat">Tropical Oasis</h1>
          </Link>

          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="hidden md:flex items-center space-x-5">
            <nav className="flex items-center space-x-5">{links}</nav>
            <div className="flex items-center space-x-3">{isMounted && authButtons}</div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-3">{links}</nav>
            <div className="flex flex-col space-y-3 mt-4">{isMounted && authButtons}</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
