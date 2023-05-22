// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoVxWvePa9oun-9ZWIpqyoxfL0fNsIHyg",
  authDomain: "edu-funda-55a6a.firebaseapp.com",
  projectId: "edu-funda-55a6a",
  storageBucket: "edu-funda-55a6a.appspot.com",
  messagingSenderId: "701734497974",
  appId: "1:701734497974:web:5576d8cd0af1bc63ac8017",
  measurementId: "G-WZXKL6S341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();