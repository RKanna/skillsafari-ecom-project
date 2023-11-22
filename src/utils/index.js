import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuMWRjTZfSVaFX8jY5vk7FdKza4cMM5ic",
  authDomain: "fir-auth-495a4.firebaseapp.com",
  projectId: "fir-auth-495a4",
  storageBucket: "fir-auth-495a4.appspot.com",
  messagingSenderId: "856307328574",
  appId: "1:856307328574:web:e710fa3c91aebb84c2136f",
};

const app = initializeApp(firebaseConfig);

//Authentication
const appAuth = getAuth(app);
//Sign in with Google

const googleProvider = new GoogleAuthProvider();

const signInWithGooglePopup = () => signInWithPopup(appAuth, googleProvider);

export { signInWithGooglePopup };
