// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlKAweJdfbbB84L2G1c2-wTpNH7eGa3cQ",
  authDomain: "ecommerce-2fdbb.firebaseapp.com",
  projectId: "ecommerce-2fdbb",
  storageBucket: "ecommerce-2fdbb.appspot.com",
  messagingSenderId: "959039293286",
  appId: "1:959039293286:web:efcc56df7cc6c8ae2c6aa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;