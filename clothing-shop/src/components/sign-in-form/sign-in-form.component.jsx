import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';

import {SignInContainer, SignInTitle, ButtonsContainer} from './sign-in-form.styles';

const signInFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(signInFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(signInFormFields);
  };

  const signInwithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmitSignIn = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/user-not-found':
          alert('Incorrect password of email');
          break;
        case 'auth/wrong-password':
          alert('No user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChangeSignIn = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>Don't have an account?</SignInTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmitSignIn}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChangeSignIn}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChangeSignIn}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">
            Sign In
          </Button>
          <Button
            type="button"
            buttonType="google" 
            onClick={signInwithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
