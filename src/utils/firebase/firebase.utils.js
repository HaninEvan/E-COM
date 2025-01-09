import { initializeApp } from "firebase/app";
import{ 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,setDoc

} from 'firebase/firestore'



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
const googleProvider = new GoogleAuthProvider();
// Set up Google auth
googleProvider.setCustomParameters({
    prompt: "select_account" // Force users to select an account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect= () => signInWithRedirect(auth, googleProvider) ;

export const db= getFirestore();

//create some of methods
export const createUserDocumentFromAuth= async (userAuth) => {
 const userDocRef= doc(db, 'users', userAuth.uid);
 console.log(userDocRef);

 const userSnapshot= await getDoc(userDocRef)
 
 //console.log(userSnapshot);
 //console.log(userSnapshot.exists());

 // 1 Check if user data exists

 //if user data does not exist
 if(!userSnapshot.exists())
{ const{displayName,email }= userAuth;
 
  const createdAt = new Date(); //new Date() Object , when users are sign it

  try{
      await setDoc(userDocRef, {
      displayName,
      email,
      createdAt  
      });
  }
  catch(error) {

console.log('error creating the user', error.message);// error.message comes from error
  }
}
return userDocRef;

 //2 return userDocRef

};