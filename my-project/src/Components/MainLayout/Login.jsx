import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../../../firbase.init';

const Login = () => {

    const provider= new GoogleAuthProvider();

    const handleGoogleLogin=()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log('Error',err)
        })
    }



    return (
        <div className='space-y-4'>
            <h1>This is Login Form</h1>
            <button onClick={handleGoogleLogin} className='btn btn-info'>Google Login</button>
        </div>
    );
};

export default Login;