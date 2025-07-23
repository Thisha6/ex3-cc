/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp63TMKRm2sMR3Sfz34XXYgaTONKnok78",
  authDomain: "ex3-cc.firebaseapp.com",
  projectId: "ex3-cc",
  storageBucket: "ex3-cc.appspot.com",
  messagingSenderId: "884006628845",
  appId: "1:884006628845:web:9350655347b260b3194be4",
  measurementId: "G-03M36SXVDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };  */

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp63TMKRm2sMR3Sfz34XXYgaTONKnok78",
  authDomain: "ex3-cc.firebaseapp.com",
  projectId: "ex3-cc",
  storageBucket: "ex3-cc.appspot.com",
  messagingSenderId: "884006628845",
  appId: "1:884006628845:web:9350655347b260b3194be4",
  measurementId: "G-03M36SXVDN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };




