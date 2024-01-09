import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    // apiKey: process.env.REACT_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_FIREBASE_MEASUREMENT_ID
    
  // apiKey: "AIzaSyC4BeVtImn5Be8kxwB_sqWzxYpFjFdO6Xg",

  // authDomain: "bookgram-b35c2.firebaseapp.com",

  // projectId: "bookgram-b35c2",

  // storageBucket: "bookgram-b35c2.appspot.com",

  // messagingSenderId: "711092446596",

  // appId: "1:711092446596:web:4d19a0efa07e485730e9d1",

  // measurementId: "G-CW5B7BDY5Z"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, db, storage, googleAuthProvider };
export default app;


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);
// export const auth = getAuth();
// export const googleAuthProvider = new GoogleAuthProvider();
// export {db, storage}
// export default app;