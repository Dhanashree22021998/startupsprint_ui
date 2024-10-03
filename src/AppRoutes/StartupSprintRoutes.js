import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import { AdminDashboard, AdminHomePage } from '../components/adminComponents'
import { AccountDashBoard, AccountHomePage } from '../components/ahComponents'
import { CustomerDashBoard, CustomerSignup, CustomerHomePage } from '../components/customerComponents'
import Login from '../components/Login'
import { LrDashBoard, LrHomePage } from '../components/lrComponents'
import { LsoDashBoard, LsoHomePage } from '../components/lsoComponents'


function StartupSprintRoutes() {
  return (
    <Routes>
        <Route path = '/' element={<HomePage/>}></Route>
        <Route path = '/login' element={<Login/>}></Route>
        <Route path= '/admin' element={<AdminDashboard/>}>
                <Route path='' element={<AdminHomePage/>}/>
        </Route>
        <Route path= '/account' element={<AccountDashBoard/>}>
                <Route path='home' element={<AccountHomePage/>}/>
        </Route>
        <Route path= '/lr' element={<LrDashBoard/>}>
                <Route path='home' element={<LrHomePage/>}/>
        </Route>
        <Route path= '/lso' element={<LsoDashBoard/>}>
                <Route path='home' element={<LsoHomePage/>}/>
        </Route>
        <Route path= '/customer' element={<CustomerDashBoard/>}>
                <Route path='signup' element={<CustomerSignup/>}/>
                <Route path='home' element={<CustomerHomePage/>}/>
        </Route>
    </Routes>
  )
}

export default StartupSprintRoutes