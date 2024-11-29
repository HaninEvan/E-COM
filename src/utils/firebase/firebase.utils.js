import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9vRiLXLkJZ_rIB4NWPEDIGv9c773BRgk",
    authDomain: "crwn-clothing-db-89e86.firebaseapp.com",
    projectId: "crwn-clothing-db-89e86",
    storageBucket: "crwn-clothing-db-89e86.firebasestorage.app",
    messagingSenderId: "200619976760",
    appId: "1:200619976760:web:598d821879716c62935ecd"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider
const provider = new GoogleAuthProvider();
// Set up Google auth
provider.setCustomParameters({
    prompt: "select_account" // Force users to select an account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);