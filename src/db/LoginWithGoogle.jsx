import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config.jsx';

export default function signInWithGoogle({ redirectTo }) {
  const handleSignInWithGoogle = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        if (user) {
          window.location.href = redirectTo;
        }
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div
      onClick={handleSignInWithGoogle}
      className="flex p-2 w-full gap-3 justify-center border-solid border-black border-1 items-center rounded"
    >
      <img src="/assets/google-login-icon-24.jpg" alt="" className="w-6 h-6" />
      <p className="font-semibold text-sm roun">Continua con Google</p>
    </div>
  );
}
