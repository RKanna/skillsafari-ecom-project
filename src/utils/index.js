import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

//firestore DB
const appDB = getFirestore(app);

const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(appDB, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("Error creating User", err.message);
    }
  }
  return userDocRef;
};

export { signInWithGooglePopup, createUserDocumentFromAuth };

// const addData = async (collection, id, val) => {
//   const res = await setDoc(doc(appDB, collection, id), val);
//   console.log(res);
// };
// addData("cities", "LA", { name: "Los Angeles", state: "CA", country: "USA" });
// addData("cities", "WD", { name: "Washington", state: "DC", country: "USA" });
