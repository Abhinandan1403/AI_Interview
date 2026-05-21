
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mockloop-ai.firebaseapp.com",
  projectId: "mockloop-ai",
  storageBucket: "mockloop-ai.firebasestorage.app",
  messagingSenderId: "560858164127",
  appId: "1:560858164127:web:da77cf144296eb3ac76baa"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider}