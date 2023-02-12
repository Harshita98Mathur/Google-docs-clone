import React from 'react'
import { useEffect } from 'react';
import GoogleButton from 'react-google-button'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider()
  const signIn =() => {
    signInWithPopup(auth, googleProvider)
    .then((res) => {
      console.log(res);
      localStorage.setItem('userEmail', res.user.email);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if(response){
        navigate("/home");
      } else {
        navigate('/');
      }
    });
  }, [])

  return (
    <div className='google-btn'>
      {/* <h1>LOGIN PAGES</h1> */}
      <GoogleButton
  onClick={signIn}
/>

    </div>
  )
}
