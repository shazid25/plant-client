// import React from 'react';

// const ErrorPage = () => {
//   return (
//     <div style={{
//       backgroundColor: '#d4edda', // light green
//       color: '#155724',           // dark green text
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontFamily: 'Arial, sans-serif',
//       textAlign: 'center',
//       padding: '2rem'
//     }}>
//       <h1 style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
//       <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Page Not Found!</h2>
//       <p style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
//         The page you're looking for doesn't exist or might have been moved. Please check the URL or go back to the homepage.
//       </p>
//     </div>
//   );
// };

// export default ErrorPage;


import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundColor: '#d4edda',
        color: '#155724',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '2rem',
        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)'
      }}
    >
      <h1 style={{ fontSize: '6rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', maxWidth: '500px', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist or might have been moved.
        Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#155724',
          color: '#fff',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#0b3d1a'}
        onMouseOut={e => e.target.style.backgroundColor = '#155724'}
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
