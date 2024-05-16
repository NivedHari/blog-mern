// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c223a.firebaseapp.com",
  projectId: "mern-blog-c223a",
  storageBucket: "mern-blog-c223a.appspot.com",
  messagingSenderId: "900676920646",
  appId: "1:900676920646:web:cbfc7d1b17dc0af1dcf147"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);