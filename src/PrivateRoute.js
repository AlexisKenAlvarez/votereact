import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'
import Home from "./home/home.js"

const PrivateRoute = () => {

    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=> {
        // GET DATA FROM axios.get(/login) on backend
        Axios.get("https://votereact-app.herokuapp.com/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoggedIn(true);
                console.log(response)
            } else {
                navigate("/" , {replace: true})
                console.log(response)
            }
        })
    },[])

    // WHILE CHECKING IF Logged in or not
    if (!loggedIn) {
        return (
            <>
                Loading...
            </>
        )
    }

    // Redirects to real home page if user is logged in
    return (
        <>
            <Home/>
            
        </>
    )
}
export default PrivateRoute