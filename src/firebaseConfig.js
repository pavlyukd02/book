// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHYd3QfjhjX0rEFuT20eIrnVVN1lCEbbk",
    authDomain: "historyofspaske.firebaseapp.com",
    projectId: "historyofspaske",
    storageBucket: "historyofspaske.firebasestorage.app",
    messagingSenderId: "461274722702",
    appId: "1:461274722702:web:f62e4cdac75c8a9fa0b4df",
    measurementId: "G-7840RJR14N"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
