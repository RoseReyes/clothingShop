// creates an app instance for a config object
import { initializeApp } from 'firebase/app'; 
import {  
  getAuth, 
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import  { 
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQm_cQRMbLPHoMuA014hGUQi9o8d0U8CA",
  authDomain: "crwn-clothing-db-da3ef.firebaseapp.com",
  projectId: "crwn-clothing-db-da3ef",
  storageBucket: "crwn-clothing-db-da3ef.appspot.com",
  messagingSenderId: "418868656026",
  appId: "1:418868656026:web:6ec18b0bd4fe691b796c23"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Keep track of all the authentication methods the app might use
export const auth = getAuth();

export const signInWithGooglePopup = () => 
  signInWithPopup(auth, googleProvider);

// Optional - should implement in sign-in component to use
export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider);

// Instantiate our database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}
 
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};