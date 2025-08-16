import React, { useContext } from 'react'
import { userContext } from '../Store'
import { Navigate, Outlet } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'


function ProtectedUser({ children }) {

    const { data } = useContext(userContext)

    console.log('this is protected', data)
    if (!data?.user?.token) {

        return <Navigate to='/login' />
    }
    // return <UserLayout />;
    return children
}

export default ProtectedUser