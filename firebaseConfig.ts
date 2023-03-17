// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

export const firebaseConfig = {
    apiKey: "AIzaSyA3A6ee2umb1FCk1oMXXv2j1f2uNPMl8k4",
    authDomain: "tpc-digital-id.firebaseapp.com",
    projectId: "tpc-digital-id",
    storageBucket: "tpc-digital-id.appspot.com",
    messagingSenderId: "591971455498",
    appId: "1:591971455498:web:636e50e54f8030f43445f3",
    measurementId: "G-1NEPDYF06G"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const firestoreDB = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

export default app;