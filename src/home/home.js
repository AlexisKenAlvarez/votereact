import React, { useState, useEffect } from 'react'
import { useNavigate, Route, Routes } from "react-router-dom"
import { motion } from 'framer-motion'
import Axios from 'axios'


//COMPONENT
import Ballot from '../ballot/ballot.js'

//STYLE
import './home.css'

const Home = () => {

    const navigate = useNavigate();
    const [welcomeuser, setWelcome] = useState('');
    const [userEmail, setEmail] = useState('')

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("https://votereact-app.herokuapp.com/login").then((response) => {
            if (response.data.loggedIn === true) {
                console.log(response)
                // setEmail(response.data.user[0].email)
            }
        })
    }, [])

    const handleBallot = () => {
        

        Axios.get('https://votereact-app.herokuapp.com/checkVote', 
        {email: userEmail}).then((response) => {
            if (response.data.voted === true) {
                navigate("/responded", {replace: true})
                console.log(response.data)
            } else {
                navigate("/ballot", {replace: true})
            }
        })
    }

    
    const message = 'THE\nFUTURE\nOF US'

    const hero = (
        
        <>
            <div className="hero-wrapper">
                <p className="sidetext">VoteNow -</p>
                <div className="hero-container">
                    <h1 className="the-future">{message}</h1>
                    <div className="button-container">
                        <div className="vote-button hero-buttons" onClick={handleBallot}>Vote</div>
                        <div className="result-button hero-buttons">Results</div>
                    </div>
                </div>
            </div>
        </>
    )
    return (
        <>
            <div className="main-content-wrapper">
                {hero}
            </div>


        </>
    )
}




export default Home

