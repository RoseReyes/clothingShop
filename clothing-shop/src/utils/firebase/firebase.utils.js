import { initializeApp } from 'firebase/app'; // creates an app instacnce for a config object
import {  
  getAuth, 
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
  // check if user data exists
  // return userdocRef
  // else 
  // create /set the document
}