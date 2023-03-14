import { 
  signInWithGooglePopup, 
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
        SignIn with Google pop-up
      </button>
    </div>
  );
};

export default SignIn;