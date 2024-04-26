// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDb-2rxhLFyCSLrPvTgG44o4jmP-13_kNQ",
  authDomain: "fir-chat-c8ae5.firebaseapp.com",
  projectId: "fir-chat-c8ae5",
  storageBucket: "fir-chat-c8ae5.appspot.com",
  messagingSenderId: "771462642362",
  appId: "1:771462642362:web:63fd5252912a30ec396083",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
