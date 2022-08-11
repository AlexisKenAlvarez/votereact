import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'


import './login.css'
import Register from '../register/register'

const Login = () => {
    const navigate = useNavigate();
    const [style, setStyle] = useState('hidden')
    const [border, setBorder] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    const [errMsg, setErr] = useState('')

    const [logstatus, setLog] = useState(false)

    Axios.defaults.withCredentials = true;


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPass(e.target.value)
    }

    const show = () => [
        setStyle('registerParent')
    ]

    const hide = () => {
        setStyle('hidden')
    }

    const reloadA = () => {
        window.location.reload(false);
    }
    
    const login = () => {
        Axios.post('https://votereact-app.herokuapp.com/login', 
        {email: email, 
        password: password,
        }).then((response) => {
            if (response.data.message) {
                setErr(response.data.message)
                setBorder(true)
            } else {
                setErr("Logged in")
                setBorder(false)
                navigate('/home', {replace: true})


            }
        })
    }

    return (
        <>
            <div className="loginParent">
                <div className="loginContainer">
                    <h1 className="vote-login">VoteReact</h1>
                    <div className="loginBox">
                        <div className="inputs-parent">
                            <input type="text" style={{border: border ? '1px solid #e2252b' : '1px solid #1B74E4'}} placeholder="Email" className="email-input" onChange={handleEmail}></input>
                            
                            <input type="password" style={{border: border ? '1px solid #e2252b' : '1px solid #1B74E4'}}placeholder="Password" className="password-input" onChange={handlePassword}></input>
                            <p className="errMsg">{errMsg}</p>
                        </div>
                        
                        <button className="loginButton" onClick={login}>Log in</button>
                        <p className="forgot">Forgot Password?</p>

                        <button className="signup" onClick={show}>Sign up</button>
                    </div>
                </div>
            </div>

            <Register styleName={style.toString()} close={() => hide()} load={() =>reloadA()}/>


        </>
    )
}


export default Login