// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 p-6">
//       <div
//         className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl"
//         data-aos="fade-up"
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
//           Login to Your Account
//         </h2>

//         <form action="/login" method="POST" className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-lg font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-lg font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="mt-6 text-center text-gray-600 text-sm">
//           Don’t have an account?{' '}
//           <Link to="/auth/registation" className="text-blue-500 font-medium hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../provider/AuthProvider';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { loginUser } = useAuth(); // Your Firebase login function
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await loginUser(email, password);
//       navigate('/'); // redirect after successful login
//     } catch (error) {
//       alert('Login failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 p-6">
//       <div
//         className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl"
//         data-aos="fade-up"
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
//           Login to Your Account
//         </h2>

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-lg font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-lg font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="mt-6 text-center text-gray-600 text-sm">
//           Don’t have an account?{' '}
//           <Link to="/auth/registation" className="text-blue-500 font-medium hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate('/');
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 p-6">
      <div
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don’t have an account?{' '}
          <Link to="/auth/registation" className="text-blue-500 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
