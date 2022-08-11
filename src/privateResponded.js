import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Axios from 'axios'
import Responded from './error/responded'

const PrivateLogin = () => {

    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(()=> {
        Axios.get("https://votereact-app.herokuapp.com/api/login").then((response) => {
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
                Loading...
                
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