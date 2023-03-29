// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Z4QlK7ID6Fr016A-kpzbra33ryhOCzc",
  authDomain: "proyectoformas-1324e.firebaseapp.com",
  projectId: "proyectoformas-1324e",
  storageBucket: "proyectoformas-1324e.appspot.com",
  messagingSenderId: "712966181212",
  appId: "1:712966181212:web:bd519f3da79ca3e11db199"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);