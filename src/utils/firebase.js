// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATs6f0dFAn1kacGBpvy7wslkVVUT4dl1Y",
  authDomain: "netflixgpt-ea141.firebaseapp.com",
  projectId: "netflixgpt-ea141",
  storageBucket: "netflixgpt-ea141.firebasestorage.app",
  messagingSenderId: "591407788601",
  appId: "1:591407788601:web:f418df08e330ada97753e8",
  measurementId: "G-Z6GXDWXNY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();