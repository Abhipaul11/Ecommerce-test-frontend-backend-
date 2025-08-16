import React, { useState, useContext } from 'react'
import styles from "./componentscss/login.module.css"
import Navbar from "./Navbar"
import Header from "./Header"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { userContext } from '../Store';
import { setlocalStorage } from '../utils/localStorage.util'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login() {
    const navigate = useNavigate()
    const [formdata, setFormData] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }

    const { dispatch } = useContext(userContext);
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/login`, formdata)
            console.log(response.data.origin.name)
            setlocalStorage(response.data.origin)
            toast.success("login successfully")
            setFormData({ email: "", password: "" })
            navigate('/')
            dispatch({ type: "user", payload: { name: response.data.origin.name, email: response.data.origin.email, token: response.data.origin.token, id: response.data.origin._id } });

        } catch (error) {
            console.log(error)
            alert("login failed")
        }
    }
    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.mainbody}>
                <form onSubmit={handleSubmit}>
                    <h2>Sign-in</h2>
                    <div className={styles.inputgrp}>
                        <p>Email</p>
                        <input type="text" name='email' placeholder='Email address' onChange={handleChange} value={formdata.email} />
                        {/* <TextField id="outlined-basic" label="Email" variant="outlined" /> */}

                    </div>

                    <div className={styles.inputgrp}>
                        <p>Password</p>
                        <input type="password" name='password' placeholder='Password' onChange={handleChange} value={formdata.password} />
                        {/* <TextField id="outlined-basic" label="Password" variant="outlined" /> */}

                    </div>





                    <span>Forgot Password?</span>

                    <button type='submit'>SIGN IN</button>

                    <p className={styles.lastp}>Don't have an account? <Link to="/signup"> <span className={styles.signup}>Sign up</span></Link> </p>

                </form>
            </div>

        </>
    )
}

export default Login