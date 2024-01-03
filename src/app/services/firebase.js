// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyC4BeVtImn5Be8kxwB_sqWzxYpFjFdO6Xg",

  authDomain: "bookgram-b35c2.firebaseapp.com",

  projectId: "bookgram-b35c2",

  storageBucket: "bookgram-b35c2.appspot.com",

  messagingSenderId: "711092446596",

  appId: "1:711092446596:web:4d19a0efa07e485730e9d1",

  measurementId: "G-CW5B7BDY5Z"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;