// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjJDgv8bvnkNv-8JsoPPwhU4AGQb5aLiU",
  authDomain: "love-merg.firebaseapp.com",
  projectId: "love-merg",
  storageBucket: "love-merg.appspot.com",
  messagingSenderId: "352258617512",
  appId: "1:352258617512:web:c10b124b8cdcd816bf529d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const firebaseStorage = getStorage(app);

export const auth = getAuth(app);
