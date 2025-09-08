import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../../firbase.init';

const Login = () => {

    const [user, setUser] = useState([null]);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                setUser(user)
            })
            .catch(err => {
                console.log('Error', err);
                setUser(null)
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                console.log('github login successfully')
            })
            .catch((err) => {
                console.log('Err', err)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out successfully')
            })
            .catch((err) => {
                console.log(err)
            })

    }



    return (
        <div className='space-y-4'>
            <h1>This is Login Form</h1>


            {
                user
                    ?
                    <button onClick={handleSignOut} className='btn bg-info'>Sign Out</button>
                    :
                    <button onClick={handleGoogleLogin} className='btn btn-info'>Google Login</button>
            }


            <button onClick={handleGithubLogin} className='btn bg-info'>Github Login</button>


        </div>
    );
};

export default Login;