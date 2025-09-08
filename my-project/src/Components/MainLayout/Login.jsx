import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../../firbase.init';

const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                setUser(result.user)
            })
            .catch(err => {
                console.log('Error', err);
                setUser(null)
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result)
                setUser(result.user)
            })
            .catch((err) => {
                console.log('Err', err)
                setUser(null)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out successfully')
                setUser(null)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const handleGithubSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out successfully')
                setUser(null)
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


            {
                user && <div>
                    <h1>{user.displayName}</h1>
                    <p>{user.email}</p>
                </div>
            }
            

        </div>
    );
};

export default Login;