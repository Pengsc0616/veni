import { Button } from '@material-ui/core'
import React from 'react'
import "../css-component/Login.css"
import logo from "../images/logo.png"
import quote from "../images/quote.png"
import {auth, provider } from "../firebase"
import { actionTypes } from "./reducer"
import { useStateValue } from "./StateProvider"

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} />
                {/* <div className="login__quote">
                    <img src={quote} />   
                </div>      */}
                <img className="login__quote" src={quote} />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
