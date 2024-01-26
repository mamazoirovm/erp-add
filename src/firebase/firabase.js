// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuhfAYRPva_g3nxhFYpBpWMnyoKWwfjGI",
  authDomain: "best-school-3463e.firebaseapp.com",
  projectId: "best-school-3463e",
  storageBucket: "best-school-3463e.appspot.com",
  messagingSenderId: "209818951346",
  appId: "1:209818951346:web:1081d075a8ded72699b3ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)