import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function UserLayout() {
    return (
        <>
            <Navbar />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout