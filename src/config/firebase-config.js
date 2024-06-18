// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAReovOYiaL02LF8QpjejpL1DXLYqQDVkA",
  authDomain: "expense-tracker2-cf7fb.firebaseapp.com",
  projectId: "expense-tracker2-cf7fb",
  storageBucket: "expense-tracker2-cf7fb.appspot.com",
  messagingSenderId: "550263037780",
  appId: "1:550263037780:web:b956ecc51f202e390cf2c1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
