import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { motion } from 'framer-motion'

import './ballot.css'

// COMPONENTS
import President from './president.js'
import Vice from './vice.js'
import Treasurer from './treasurer.js'
import Submitted from '../submitted/submitted.js'


const Ballot = () => {

    Axios.defaults.withCredentials = true;

    const [page, setPage] = useState(0);

    const [form, setForm] = useState({
        president: '',
        vice: '',
        treasurer: ''
    })

    const handlePresident = value => {
        setForm({
            ...form,
            president : value
        })
    }

    const handleVice = value => {
        setForm({
            ...form,
            vice : value
        })
    }

    const handleTreasurer= value => {
        setForm({
            ...form,
            treasurer : value
        })
    }

    const [picked, setPicked] = useState(true);

    const handlePage = () => {
        if(page === 0) {
            if (form.president === '') {
                console.log("Please choose your vote before proceeding.")
                setPicked(false)
                setTimeout(() => {
                    setPicked(true)
                }, 500)
            } else {
                setPage((current) => current + 1)
                setPicked(true)
            }
        } else if (page === 1) {
            if (form.vice === '') {
                console.log("Please choose your vote before proceeding.")
                setPicked(false)
                setTimeout(() => {
                    setPicked(true)
                }, 800)
            } else {
                setPage((current) => current + 1)
                setPicked(true)

            }

        } 
        
    }

    const goBack = () => {
        setPage((current) => current - 1)
    }

    const [userEmail, setEmail] = useState('')

    useEffect(() => {
        Axios.get("https://votereact-app.herokuapp.com/login").then((response) => {
            if (response.data.loggedIn === true) {
                setEmail(response.data.user[0].email)
            }
        })
    }, [])

    const [voting, setDoneVoting] = useState(false)
    const handleStatus = () => {
        console.log(form.president)
        console.log(form.vice)
        console.log(form.treasurer)

        if (page === 2) {
            if (form.treasurer === '') {
                console.log("You must vote someone first")
                setPicked(false)
                setTimeout(() => {
                    setPicked(true)
                }, 800)
            } else {
                setPicked(true)
                setDoneVoting(true)
                Axios.post('https://votereact-app.herokuapp.com/voted', 
                {email: userEmail, president: form.president, vice: form.vice, treasurer: form.treasurer}).then((response) => {
                    
                })


            }
        } 
    }
    
    const back = (
        <div className="back-button" onClick={goBack}>BACK</div>
    )

    const pvariants = {
        error: {
            x: [0, -20, 20 , -20, 20, 0],
        },

        none: {
            
        }
    }

    const next = (

        <div className="next-container">
            <motion.p variants={pvariants} animate={picked ? "none" : "error"} className="cast" style={{color: picked ? 'black' : '#e2252b' }}>Please cast your vote before proceeding.</motion.p>
            <div className="next-button" onClick={handlePage}>NEXT</div>
            {page === 0 ? null : back}
        </div>
    )

    const submit = (
        <div className="next-container">
            <motion.p variants={pvariants} animate={picked ? "none" : "error"} style={{color: picked ? 'black' : '#e2252b' }} className="cast">Please cast your vote before proceeding.</motion.p>
            <div className="submit-button" onClick={handleStatus}>SUBMIT</div>
            {page === 0 ? null : back}
        </div>
    )

    const main = (
        <div className="ballot-wrapper">
            
            <div className="earth-bg"></div>
            <div className="ballot-container">
                {page === 0 ? <President setPresident={(value) => handlePresident(value) } president={form.president}/>
                : page === 1 ? <Vice setVice={(value) => handleVice(value) } vice={form.vice}/>
                : page === 2 ? <Treasurer setTreasurer={(value) => handleTreasurer(value) } treasurer={form.treasurer}/> : null}

                {page === 2 ? submit : next}
            </div>
        </div>
    )


    return (
        <>
            {voting ? <Submitted/> : main}
        </>
    )
}

export default Ballot;