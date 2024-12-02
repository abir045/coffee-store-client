// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX2a6_qS7ARZG1d7szvoiSzqGn47AJQ-4",
  authDomain: "coffee-store-b9944.firebaseapp.com",
  projectId: "coffee-store-b9944",
  storageBucket: "coffee-store-b9944.firebasestorage.app",
  messagingSenderId: "348062353499",
  appId: "1:348062353499:web:af2e5271f078e80c61977e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
