import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import ScrollToTop from '../ScrollToTop.js'

// IMAGES
import Plane from '../images/animation_500_l5htkal7.gif'

// STYLES
import './submitted.css'

const Submitted = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', {replace: true})
        }, 2000)

    }, [])

    return  (
        <>
            <ScrollToTop/>
            <div className="submitted-wrapper">
                <div className="submitted-nav"></div>
                <div className="submitted-hero">
                    <h1 className="submitted-h1">Thank you for responding!</h1>
                    <p className="submitted-p">We will anounce the result as soon as possible. </p>
                    <p className="submitted-click">Redirecting to homepage...</p>
                    <img className="plane" src={Plane}></img>
                </div>
            </div>
        </>
    )
}

export default Submitted;