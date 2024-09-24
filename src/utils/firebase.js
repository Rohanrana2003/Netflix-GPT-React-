// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXurdF7fd1SE58v5bpoif4sZ0tJrXRYTQ",
  authDomain: "netflixgpt-03.firebaseapp.com",
  projectId: "netflixgpt-03",
  storageBucket: "netflixgpt-03.appspot.com",
  messagingSenderId: "324604896717",
  appId: "1:324604896717:web:e5cf6e9681486981e09084",
  measurementId: "G-HQZ650TBDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();