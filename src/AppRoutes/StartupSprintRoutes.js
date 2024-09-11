import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import { AdminDashboard, AdminHomePage } from '../components/adminComponents'
import { AccountDashBoard } from '../components/ahComponents'
import { CustomerDashBoard } from '../components/customerComponents'

function StartupSprintRoutes() {
  return (
    <Routes>
        <Route path = '/' element={<HomePage/>}></Route>
        <Route path= '/admin' element={<AdminDashboard/>}>
                <Route path='' element={<AdminHomePage/>}/>
        </Route>
        <Route path= '/account' element={<AccountDashBoard/>}></Route>
        <Route path= '/customer' element={<CustomerDashBoard/>}></Route>
    </Routes>
  )
}

export default StartupSprintRoutes