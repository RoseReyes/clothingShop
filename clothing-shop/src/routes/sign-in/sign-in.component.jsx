import {
  signInWithGooglePopup, 
  signInWithGoogleRedirect,
  createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
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