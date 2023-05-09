// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj1HdWdko22GthPucSZzeHpERNsmkAKEw",
  authDomain: "dragon-news-client-c0efc.firebaseapp.com",
  projectId: "dragon-news-client-c0efc",
  storageBucket: "dragon-news-client-c0efc.appspot.com",
  messagingSenderId: "484860727650",
  appId: "1:484860727650:web:b4c41546046f2e4ee29c3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;