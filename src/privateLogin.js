import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Axios from 'axios'
import Home from "./home/home.js"
import Login from "./login/login.js"

const PrivateLogin = ({ children }) => {

    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    
    const [loggedIn, setLoggedIn] = useState(true);
    useEffect(()=> {
        Axios.get("https://votereact-app.herokuapp.com/api/login").then((response) => {
            if (response.data.loggedIn === true) {
                navigate("/home" , {replace: true})
                
            } else {
                setLoggedIn(false);
            }
        })
    },[])

    if (!loggedIn) {
        return (
            <>
                <Login/>
                
            </>
        )
    }

    return (
        <>
        Loading...
        </>
    )


}
export default PrivateLogin