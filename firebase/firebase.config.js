// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3jG7P3Xge8GjhFSM5mWFFST_xLV6o3Sc",
  authDomain: "exam-8ecf3.firebaseapp.com",
  projectId: "exam-8ecf3",
  storageBucket: "exam-8ecf3.appspot.com",
  messagingSenderId: "573564831860",
  appId: "1:573564831860:web:b0a325d95c4a55808c2921",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth;
export { app, auth };
