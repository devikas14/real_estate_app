// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-app-11963.firebaseapp.com",
  projectId: "mern-estate-app-11963",
  storageBucket: "mern-estate-app-11963.appspot.com",
  messagingSenderId: "602363751312",
  appId: "1:602363751312:web:e54169ae1f2178cc58a115"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);