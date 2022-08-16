import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Axios from 'axios'
import Responded from './error/responded'
import Loader from './preloader/loader.js'

const PrivateLogin = () => {

    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(()=> {
        Axios.get("https://votereact-app.herokuapp.com/login").then((response) => {
            if (response.data.loggedIn === false) {
                navigate("/" , {replace: true})
                
            } else {
                setLoggedIn(true);
            }
        })
    },[])

    if (!loggedIn) {
        return (
            <>
                <Loader/>
                
            </>
        )
    }

    return (
        <>
            <Responded/>
        </>
    )


}
export default PrivateLogin