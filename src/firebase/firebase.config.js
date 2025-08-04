// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC9CKkxTDCtB8Xf7mg-5iWyMZeVo0ov7FI",
//   authDomain: "plant-client.firebaseapp.com",
//   projectId: "plant-client",
//   storageBucket: "plant-client.firebasestorage.app",
//   messagingSenderId: "423934949159",
//   appId: "1:423934949159:web:224901aba5a197e52adb02"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;



// src/firebase/firebase.config.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC9CKkxTDCtB8Xf7mg-5iWyMZeVo0ov7FI",
  authDomain: "plant-client.firebaseapp.com",
  projectId: "plant-client",
  storageBucket: "plant-client.firebasestorage.app",
  messagingSenderId: "423934949159",
  appId: "1:423934949159:web:224901aba5a197e52adb02"
};

const app = initializeApp(firebaseConfig);
export default app;
