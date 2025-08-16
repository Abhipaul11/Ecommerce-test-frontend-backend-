import React, { useState } from 'react'
import styles from "./componentscss/login.module.css"
import Navbar from "./Navbar"
import Header from "./Header"
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [formdata, setFormData] = useState({ name: "", email: "", password: "" })

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/signup`, formdata);
            console.log(response)
            alert("resgistration successfully")
            setFormData({ name: "", email: "", password: "" });

        } catch (error) {
            console.error(error);
            alert('registration failed. Please try again.');
        }
    }

    return (
        <>
            <Navbar />
            <Header />

            <div className={styles.mainbody}>

                <form onSubmit={handleSubmit}>
                    <h2>Sign-Up</h2>
                    <div className={styles.inputgrp}>
                        <p>Name</p>
                        <input type="text" name='name' placeholder='Full Name' onChange={handleChange} value={formdata.name} />
                    </div>
                    <div className={styles.inputgrp}>
                        <p>Email</p>
                        <input type="text" name='email' placeholder='Email address' onChange={handleChange} value={formdata.email} />
                    </div>

                    <div className={styles.inputgrp}>
                        <p>Password</p>
                        <input type="password" name='password' placeholder='Password' onChange={handleChange} value={formdata.password} />
                    </div>

                    <button type='submit'>SIGN UP</button>

                    <p className={styles.lastp}> have an account? <Link to="/login"> <span className={styles.signup}>Sign in</span></Link> </p>

                </form>

            </div>
        </>
    )
}

export default Signup