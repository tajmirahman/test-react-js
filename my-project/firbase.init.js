// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjD-UWM6roH8YQsuuVKvoapSE2O4_axvw",
  authDomain: "comming-back.firebaseapp.com",
  projectId: "comming-back",
  storageBucket: "comming-back.firebasestorage.app",
  messagingSenderId: "678568242714",
  appId: "1:678568242714:web:a502cec31ebef94d2baba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);