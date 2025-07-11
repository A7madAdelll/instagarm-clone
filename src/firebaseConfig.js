// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcyqfDAz84rWEzSozpD3yT2-mGqyi48xQ",
  authDomain: "instagramclone-58a66.firebaseapp.com",
  projectId: "instagramclone-58a66",
  storageBucket: "instagramclone-58a66.firebasestorage.app",
  messagingSenderId: "479456579163",
  appId: "1:479456579163:web:d2df7b00d550a0721c797e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
export { auth, db, googleProvider, signInWithEmailAndPassword };
