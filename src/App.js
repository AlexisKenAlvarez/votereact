import React, { useState, useEffect } from 'react'
import { Route, Routes, Link, useNavigate } from "react-router-dom"
import Axios from 'axios'

// COMPONENTS
import Login from './login/login.js'
import Home from './home/home.js'
import PrivateRoute from './PrivateRoute.js'
import PrivateLogin from './privateLogin.js'
import PrivateBallot from './privateballot.js'
import PrivateResponded from './privateResponded.js'

// STYLE
import './login/login.css'
import './register/register.css'
import './App.css'

// IMAGE
import menu from './images/menubtn.svg'
import reactLogo from './images/votelogo.webp'


const App = () => {
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;

    const [slideActive, setSlide] = useState(false)
    const [nav, showNav] = useState(false)

    const handleSlide = event => {
        setSlide(current => !current)
    }

    const closeNav = () => {
        setSlide(false)
    }

    const logOut = () => {
        Axios.get('https://votereact-app.herokuapp.com/logout').then((response) => {
            console.log(response)
            
        }, [])
        navigate('/', {replace: true});
    }

    const toHome = () => {
        navigate('/home', {replace: true})
    }

 
    Axios.get("https://votereact-app.herokuapp.com/login").then((response) => {
        if (response.data?.loggedIn) {
            showNav(true)
        } else {
            showNav(false)
        }
    })


    const navBar = (
        <>
            <div className="navWrapper">
                <div className="navContainer">
                    <img className="react-logo" src={reactLogo}  onClick={toHome}></img>
                    <h1 className="votereact" onClick={toHome}>VoteReact</h1>
                    <img src={menu} className="menu-btn" onClick={handleSlide}></img>
                </div>
            </div>

            <div className="side-menu" style={slideActive ? {transform: "translateX(0%)"} : {transform: "translateX(100%)"}}>
                <div className="side-menu-inner">
                    <p className="close" onClick={closeNav}>X</p>
                    <div className="items-container">
                        <ul className="nav-ul">
                            <li className="home-nav nav-items" onClick={toHome}>Home</li>
                            <li className="about-nav nav-items">About</li>
                            <li className="contact-nav nav-items">Contact</li>
                            <li className="logout-nav nav-items" onClick={logOut}>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <>
            {nav ?  navBar  : null}

            <Routes>
                
                <Route exact path="/" element={<PrivateLogin/>}></Route>
                <Route exact path="/ballot" element={<PrivateBallot/>}></Route>
                <Route exact path="/responded" element={<PrivateResponded/>}></Route>
            
                <Route exact path="/home" element={
                    <PrivateRoute>
                        <Home/>
                    </PrivateRoute>

                }></Route>

            </Routes>
        </>
    )
}
export default App