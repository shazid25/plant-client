// // src/components/Registration/Registration.jsx
// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../provider/AuthProvider';

// const Registration = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { createUser } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       await createUser(email, password);
//       alert('Registration successful!');
//       navigate('/plant'); // Redirect to plant page
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 p-6">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Create a New Account</h2>
//         <form onSubmit={handleRegister} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
//             <input 
//               type="text" 
//               id="name" 
//               name="name" 
//               required 
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" 
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
//             <input 
//               type="email" 
//               id="email" 
//               name="email" 
//               required 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" 
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
//             <input 
//               type="password" 
//               id="password" 
//               name="password" 
//               required 
//               pattern=".{6,}" 
//               title="Password must be at least 6 characters" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" 
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg transition duration-300">Register</button>
//         </form>
//         <p className="mt-6 text-center text-gray-600 text-sm">
//           Already have an account?{' '}
//           <Link to="/auth/login" className="text-blue-500 font-medium hover:underline">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Registration;




// src/components/Registration/Registration.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUser(email, password, name);
      navigate('/plant'); // Redirect to plant page
    } catch (error) {
      setError(error.message);
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Create a New Account</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              pattern=".{6,}" 
              title="Password must be at least 6 characters" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" 
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg transition duration-300">Register</button>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-blue-500 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;