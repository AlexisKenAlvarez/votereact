import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

// IMAGES
import Error from '../images/error.png'

// STYLES
import './responded.css'

const Responded = () => {

    const navigate = useNavigate();

    const handleBack = () => {  
        navigate('/home', {replace: true})
    }
    return  (
        <>
            <div className="responded-wrapper">
                <div className="responded-nav"></div>
                <div className="responded-hero">
                    <h1 className="responded-h1">You've already responded</h1>
                    <p className="responded-p">You can only submit to this form once.</p>
                    <p className="responded-click">Click <span className="error-span" onClick={handleBack}>here</span> to go back</p>
                    <img className="error-bot" src={Error}></img>
                </div>
            </div>
        </>
    )
}

export default Responded;