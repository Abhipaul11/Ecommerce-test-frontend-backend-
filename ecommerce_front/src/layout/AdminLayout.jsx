import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function AdminLayout() {
    return (
        <>
            <Navbar />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AdminLayout