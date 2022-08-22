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
import About from './about/about.js'

// STYLE
import './login/login.css'
import './register/register.css'
import './App.css'

// IMAGE
import menu from './images/menubtn.svg'
import reactLogo from './images/votelogo.webp'

// FOOTER SOCMED
import facebook from './images/footer/001-facebook.svg'
import linkedin from './images/footer/010-linkedin.svg'
import instagram from './images/footer/011-instagram.svg'
import tiktok from './images/footer/016-tiktok.svg'


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

    // FOOTER

    const handleAbout = () => {
        navigate("/about", {replace: true})
    }

    const handleFacebook = () => {
        window.open('https://www.facebook.com/alvarez.aki/')
    }

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/AlexisKenAlvarez/?fbclid=IwAR03PF7gf7MrRLDUta-uI1LdJ5PUQh0r3UBAug15sf9nqsRLgxQT2BOLbu8')
    }

    const handleInsta = () => {
        window.open('https://www.instagram.com/alexiskenalvarez/')
    }

    const handleTiktok = () => {
        window.open('https://www.tiktok.com/@aki.alvarez?fbclid=IwAR3irqVi7g-62kw1ACWfnXXhL06S29xxhfFkVOdiTTTp30T_dBVN7gePSuM')
    }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    

    const footer = (
        <>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="footer-up">
                        <p className='elect'>"Elect a clown, Expect a circus."</p>
                        <div className="hori-line-upper"></div>
                    </div>
                    
                    <div className="footer-mid">
                        <div className="fmid-left">
                            <h1 className="follow-on">FOLLOW ON</h1>
                            <div className="footer-soc-container">
                                <img className='footer-fb footer-soc' src={facebook} onClick={handleFacebook}></img>
                                <img className='footer-ig footer-soc' src={instagram} onClick={handleInsta}></img>
                                <img className='footer-linkedin footer-soc' src={linkedin} onClick={handleLinkedin}></img>
                                <img className='footer-tiktok footer-soc' src={tiktok} onClick={handleTiktok}></img>
                            </div>
                        </div>
                        <div className="fmid-right">
                            
                            <h1 className='footer-about'>Navigate</h1>
                            <div className='footer-about-items'>
                                <div className="verti-line-mid"></div>
                                <p className='footer-team about-items' onClick={handleAbout}>About us</p>
                                <p className='footer-privacy about-items' onClick={handleAbout}>Privacy Policy</p>
                                <p className='footer-mission about-items' onClick={handleAbout}>Mission</p>
                               
                                <p className='footer-terms about-items' onClick={handleAbout}>Terms of Use</p>

                            </div> 
                        </div>
                    </div>

                    <div className="footer-down">
                        <p className="footer-back" onClick={handleScrollToTop}>Back to top</p>
                        <div className="hori-line-lower"></div>

                        <p className="copyright">Copyright © All Rights Reserved 2022</p>
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
                <Route exact path="/about" element={<About/>}></Route>
                <Route exact path="/responded" element={<PrivateResponded/>}></Route>
            
                <Route exact path="/home" element={
                    <PrivateRoute>
                        <Home/>
                    </PrivateRoute>

                }></Route>

            </Routes>

            {footer}
        </>
    )
}
export default App