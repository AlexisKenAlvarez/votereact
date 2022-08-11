import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'
import Home from "./home/home.js"

const PrivateRoute = ({ children }) => {

    // state to store whether the auth check has completed.
    const [loading, setLoading] = useState(true);

    // state to store whether the user is authenticated
    const [loggedIn, setLoggedIn] = useState(false);

    // state to store any error encounted while running the auth check.
    const [error, setError] = useState();

    Axios.defaults.withCredentials = true;

    const navigate = useNavigate();

    useEffect(()=> {
        // create async function to avoid the use of promise .then spam
        // this is just a preference coming from C# background prefer the 
        // async / await syntax.
        const checkLogin = async () => {
            try {
                // run the auth check.
                const response = await Axios.get("https://votereact-app.herokuapp.com/login");
    
                // set whether the user is logged in.
                setLoggedIn(!!response?.data?.loggedIn)

                // set that no error was encountered.
                setError(undefined);

                // start redirection if not logged in.
                if (!response?.data?.loggedIn) {
                    navigate("/" , {replace: true});
                }
            }
            // catch any error with the request.
            catch (err) {
                // set user to not logged in.
                setLoggedIn(false);

                // set the error to the caught exception.
                setError(err);

                // add another redirect call if you don't want to display an error when the request fails
                // e.g.: navigate("/" , {replace: true});
            }

            // request is finished set loading to false.
            setLoading(false);
        };

        checkLogin();
    }, [setLoading, setError, setLoggedIn])

    // This is the view while the auth check is being carried out:
    if (loading) {
        return (
            <>
                I am checking auth status...
            </>
        );
    }

    // This is the view if the auth check encounters an error:
    if (error) {
        return (
            <pre>
                {JSON.stringify(error, null, '\t')}
            </pre>
        );
    }

    // This is the view if the user was not authenticated
    // As the redirect is started as part of the useEffect this will
    // most likely not be displayed for any significant (or even preceivable)
    // amount of time.
    if (!loggedIn) {
        return (
            <>
                I am redirecting...
            </>
        );
    }

    // This is the view if the user was authenticated.
    // Example view below renders the child elements that have been provided i.e. <Home /> in your snippet.
    return (
        <>
            <Home/>
        </>
    )
}
export default PrivateRoute