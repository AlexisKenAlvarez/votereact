import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Axios from 'axios'
import Ballot from './ballot/ballot.js'

const PrivateRoute = () => {

    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(()=> {
        Axios.get("https://votereact-app.herokuapp.com/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoggedIn(true);
            } else {
                navigate("/" , {replace: true})
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
            <Ballot/>
            
        </>
    )
}
export default PrivateRoute