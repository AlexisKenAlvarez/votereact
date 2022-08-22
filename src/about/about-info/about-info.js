import React from 'react'

import './about-info.css'

import Phone from '../../images/about/mockup/phone.webp'

const AboutInfo = () => {
    return (
        <>
            <div className='about-info-wrapper'>
                <div className='about-info-container'>
                    <div className='about-body'>
                        
                        
                        <div className='about-body-p'>
                            <img src={Phone} className='about-phone'></img>
                            <h1 className='about-info-h1'>ABOUT</h1>
                            <p className='about-info-p'>
                            VoteReact is a voting system website made with ReactJS. Some of its UI designs are inspired by Facebook UI because React is made by one of Facebook’s software engineer 
                            Jordan Walke.</p>

                            <div>&nbsp;</div>

                            <p className='ab-p2'> VoteReact’s capability to handle multiple candidate is still limited, it is not yet open for public to create their own e-ballots and share its link to the public. For now, I use VoteReact for personal use but I plan to propose it on our school organizations for their election days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutInfo;