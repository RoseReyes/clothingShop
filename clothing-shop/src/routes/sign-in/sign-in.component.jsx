// Required for implementing signInWithRedirect 
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup, 
  signInWithGoogleRedirect,
  createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // Example implementation of signInWithRedirect 
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
    
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>I am sign-in page</h1>
      <button onClick={logGoogleUser}>
        SignIn with Google Popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
      SignIn with Google Redirect</button>
    </div>
  );
};

export default SignIn;