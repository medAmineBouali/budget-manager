// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOSHBwUfGOLT7TP-Rw_G681BKeVx3bxZE",
  authDomain: "budget-manager-c71cf.firebaseapp.com",
  databaseURL: "https://budget-manager-c71cf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "budget-manager-c71cf",
  storageBucket: "budget-manager-c71cf.appspot.com",
  messagingSenderId: "858239361601",
  appId: "1:858239361601:web:c6a9650509a482d6811cc0",
  measurementId: "G-13692TR6R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const fireStore = getFirestore(app);
