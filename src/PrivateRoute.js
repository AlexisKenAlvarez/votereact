import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'
import Home from "./home/home.js"

const PrivateRoute = ({ children }) => {

    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(()=> {
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