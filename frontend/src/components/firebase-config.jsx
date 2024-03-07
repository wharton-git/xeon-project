// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh6-X12DQalS-4Zq8USPPr7LM_qo1q04Y",
  authDomain: "chatapp-8466d.firebaseapp.com",
  projectId: "chatapp-8466d",
  storageBucket: "chatapp-8466d.appspot.com",
  messagingSenderId: "472920378212",
  appId: "1:472920378212:web:53e2d01626e21cb4898871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
