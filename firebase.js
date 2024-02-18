// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc6iPkZAxkIHL0rzkiWAPQwBb4TJIDMH4",
  authDomain: "mypokemonlist-0.firebaseapp.com",
  projectId: "mypokemonlist-0",
  storageBucket: "mypokemonlist-0.appspot.com",
  messagingSenderId: "1095688421872",
  appId: "1:1095688421872:web:2d4e299c17ee23dade9d35",
  measurementId: "G-Z24WY063MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);