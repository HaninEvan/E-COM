import {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth';

import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } 
from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    
    useEffect( () => {     //when the app mount
        const asyncFn = async ()=>{const response= await getRedirectResult(auth) ;
        console.log(response) }; asyncFn()
    
    }, []) //emptu array run this function once when the component mount for the firdst time
    // Create logGoogleUser function
  
   
    const logGoogleUser = async () => { 
        
        //const response = await signInWithGooglePopup();
        
        //destruct of response and pass in as userAuth 
        const { user } = await signInWithGooglePopup();
        
        //callig method using response user object
       const userDocRef= await createUserDocumentFromAuth(user)
    };
    // const logGoogleRedirectUser = async () => { 
    //     const { user } = await signInWithGoogleRedirect();   
    //     console.log({user});
    // };

    return (
        <div>
            <h1>I'm the sign-in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={ signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
        </div>
    );
};

export default SignIn;