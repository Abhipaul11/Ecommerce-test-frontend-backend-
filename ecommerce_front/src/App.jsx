import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'


import Form from './Form'
import Store from './Store'
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'
import UserLayout from './layout/UserLayout'
import ProtectedUser from './protected/ProtectedUser'
import ModalboxCart from './components/ModalboxCart'
import Orderhistory from './pages/Orderhistory'
import Invoice from './pages/Invoice'
import Orderdetails from './pages/Orderdetails'
import Admindashboard from './admin/Admindashboard'
import AdminUser from './admin/AdminUser'
import AdminOrder from './admin/AdminOrder'
import AdminLayout from './layout/AdminLayout'

function App() {

  return (
    <>

      <Store>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path='/user' element={<ProtectedUser><UserLayout /></ProtectedUser>}>
              <Route path="/user/favorite" element={<Favorite />} />
              <Route path="/user/cart" element={<Cart />} />
              <Route path="/user/orderhistory" element={<Orderhistory />} />
              <Route path="/user/orderdetails" element={<Orderdetails />} />
              <Route path="/user/invoice" element={<Invoice />} />
            </Route>

            <Route path='/admin' element={<ProtectedUser><AdminLayout /></ProtectedUser>}>
              <Route path="/admin/admindashboardorder" element={<AdminOrder />} />
              <Route path="/admin/totaluser" element={<AdminUser />} />
            </Route>

            <Route path="/modalboxcart" element={<ModalboxCart />} />

          </Routes>
        </Router>
      </Store >

    </>
  )
}

export default App
