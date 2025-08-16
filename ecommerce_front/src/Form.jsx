import React from 'react'
import styles from '../src/components/componentscss/login.module.css'
import { Link } from 'react-router-dom'
import { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'name': {
            return {
                ...state,
                name: action.payload
            }
        }

        case 'email': {
            return {
                ...state,
                email: action.payload

            }
        }
        case 'password': {
            return {
                ...state,
                password: action.payload
            }
        }
        case 'reset':
            return initialstate;

    }
}
const initialstate = {
    name: '', email: '', password: ''
}

function Form() {
    const [data, dispatch] = useReducer(reducer, initialstate)

    function handleChange(e) {
        switch (e.target.name) {
            case 'name': {
                dispatch({ type: "name", payload: e.target.value })
                break
            }

            case 'email': {
                dispatch({ type: "email", payload: e.target.value })
                break

            }
            case 'password': {
                dispatch({ type: "password", payload: e.target.value })
                break
            }
            case 'reset': {
                dispatch({ type: "reset", payload: e.target.value })
                break
            }
        }

    }
    function handleReset() {
        dispatch({ name: '', email: '', password: '' });
    }


    function handleSubmit() {
        console.log(data)
    }

    return (
        <>
            <div className={styles.mainbody}>

                <form  >
                    <h2>Sign-Up</h2>
                    <div className={styles.inputgrp}>
                        <p>Name</p>
                        <input type="text" name='name' placeholder='Full Name' onChange={handleChange} />
                    </div>
                    <div className={styles.inputgrp}>
                        <p>Email</p>
                        <input type="text" name='email' placeholder='Email address' onChange={handleChange} />
                    </div>

                    <div className={styles.inputgrp}>
                        <p>Password</p>
                        <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                    </div>

                    <button type='button' onClick={(e) => handleSubmit(e)} >SIGN UP</button>
                    <button type='reset' onClick={handleReset} >Reset</button>

                    <p className={styles.lastp}> have an account? <Link to="/login"> <span className={styles.signup}>Sign in</span></Link> </p>

                </form>

            </div>
        </>
    )
}

export default Form;