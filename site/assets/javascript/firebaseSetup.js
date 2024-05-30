// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpXVBDw4v0T8twSBDbmOJ4ZtvBpA4-nzk",
  authDomain: "public-site-4c414.firebaseapp.com",
  projectId: "public-site-4c414",
  storageBucket: "public-site-4c414.appspot.com",
  messagingSenderId: "364927581873",
  appId: "1:364927581873:web:d148a8ade25f7c559fac90",
  measurementId: "G-50695YL6BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
