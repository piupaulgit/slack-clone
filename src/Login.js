import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { auth, provider } from './firebase';
import './Login.css';
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user
            })
        }).catch((error) => {
            alert(error.message)
        }) 
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..v_1569479844.jpg" alt=""/>
                <h1>Sign in to Slack Clone</h1>
                <p>slack site</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
            
        </div>
    )
}

export default Login
