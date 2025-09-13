// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOnlussri36bQxh3rPvNjRkDzPQRQzewU",
  authDomain: "netflixgpt-84724.firebaseapp.com",
  projectId: "netflixgpt-84724",
  storageBucket: "netflixgpt-84724.firebasestorage.app",
  messagingSenderId: "236487649412",
  appId: "1:236487649412:web:5d5e83ba8d1e626e96bad1",
  measurementId: "G-WLQVVELCP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();