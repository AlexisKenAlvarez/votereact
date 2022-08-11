import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Axios from 'axios'
import Home from "./home/home.js"

const PrivateRoute = ({ children }) => {

    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(()=> {
        Axios.get("http://localhost:3001/login").then((response) => {
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
            <Home/>
            
        </>
    )
}
export default PrivateRoute