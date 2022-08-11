import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'



const Register = props => {

    const [username, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    const [emailErr, setEmailErr] = useState('')
    const [userErr, setUserErr] = useState('')
    const [passErr, setPassErr] = useState('')

    const [pass1, setPass1] = useState(false)
    const [pass2, setPass2] = useState(false)
    const [pass3, setPass3] = useState(false)

    const [auto1, setAuto1] = useState(false)
    const [auto2, setAuto2] = useState(false)
    const [auto3, setAuto3] = useState(false)


    const [succ, setSucc] = useState('')

    const inputs = [email, username, password];

    console.log()
    

    const userInput = (e) => {
        setUser(e.target.value)

        if (username.trim().length === -1) {
            setUserErr("Username cannot be empty!")


        } else if (username.trim().length < 3) {
            setUserErr("Username is too short!")


        } else if (!isNaN(+username)) {
            setUserErr("Username canont be numeric!")


        } else {
            setUserErr('')
            
            setAuto2(true)
        }
    }

    const emailInput = (e) => {
        setEmail(e.target.value)

        if(email.trim().length === -1) {
            setEmailErr("Email cannot be empty")

            
        } else if (!(/\S+@\S+\.\S+/.test(email))) {
            setEmailErr("Invalid Email")

            
        } else {
            setEmailErr('')
            setAuto1(true)

        }

    }

    const passInput = (e) => {
        setPass(e.target.value)

        if (password.trim().length === -1) {
            setPassErr("Your password cannot be empty!")

        } else if(password.trim().length <= 3) {
            setPassErr("Your password is too weak!")


        } else {
            setPassErr('')
            setAuto3(true)
        }
    }

    const register = () => {

        const removeUserWhite = username.replace(/ /g, '')
        setUser(removeUserWhite)

        inputs.map((input, i) => {
            if(i === 0) {
                if(input.trim().length === 0) {
                    setEmailErr("Email cannot be empty")
   
                    
                } else if (!(/\S+@\S+\.\S+/.test(input))) {
                    setEmailErr("Invalid Email")

                    
                } else {
                    setEmailErr('')
                    setPass1(true)

                }
            } else if (i === 1){
                if (input.trim().length === 0) {
                    setUserErr("Username cannot be empty!")


                } else if (username.trim().length < 3) {
                    setUserErr("Username is too short!")


                } else if (!isNaN(+username)) {
                    setUserErr("Username canont be numeric!")

                } else {
                    setUserErr('')
                    setPass2(true)
                }

            } else if  (i === 2) {
                if (input.trim().length === 0) {
                    setPassErr("Your password cannot be empty!")

                } else if(input.trim().length <= 3) {
                    setPassErr("Your password is too weak!")
       

                } else {
                    setPassErr('')
                    setPass3(true)
                }
            } 
        })
    } 

    
    if (pass1 && pass2 && pass3) {
        console.log("SUCCESS")

        setPass1(false)
        setPass2(false)
        setPass3(false)

        Axios.post('https://votereact-app.herokuapp.com/register', 
        {username: username, 
        email: email, 
        password: password,
        }).then((response) => {
            console.log(response)
            if (response.data.message) {
                setEmailErr("This email is already taken!")
            } else if (response.data.success) {
                setSucc("Congratulations, Your account has been created!")
                setTimeout(() => {
                    setSucc('')
                    props.load();
                }, 1000)
            }
        })
    } 

    return (
        <>

            <div className={props.styleName}>
                <div className="close-div" onClick={() => props.close()}></div>
                <div className="registerContainer">
                    <div className="registerHeader">
                        <h1 className="registerTitle">Register</h1>
                        <p className="pRegister">It's quick and easy</p>
                        <p className="close" onClick={() => props.close()}>X</p>
                    </div>  
                    <div className="regInputParent">
                        <input type="text" placeholder="Email" className="reg-email reg-inputs" onChange={emailInput}style={{ borderBottom: emailErr !== '' ? '3px solid #e2252b' : auto1 ? '3px solid #42B72A' : '3px solid #9B9A9A'}}></input>
                        <input type="text" placeholder="Username" className="reg-user reg-inputs" onChange={userInput}style={{ borderBottom: userErr !== '' ? '3px solid #e2252b' : auto2 ? '3px solid #42B72A' : '3px solid #9B9A9A'}}></input>
                        <input type="password" placeholder="Password" className="reg-pass reg-inputs" onChange={passInput} style={{ borderBottom: passErr !== '' ? '3px solid #e2252b' : auto3 ? '3px solid #42B72A' : '3px solid #9B9A9A'}}></input>
                        <p className="terms">By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy.</p>
                    </div>
                    <div className="error-container">
                        <ul>
                            {emailErr!== '' ? <li className="errorList">{emailErr}</li> : null}
                            {userErr!== '' ? <li className="errorList">{userErr}</li> : null}
                            {passErr!== '' ? <li className="errorList">{passErr}</li> : null}
                            {succ !== '' ? <li className="success">{succ}</li> : null}
                            

                        </ul>
                    </div>
                    <button className="submitReg" onClick={register}>Sign up</button>
                </div>
            </div>
        </>
    )
}

export default Register