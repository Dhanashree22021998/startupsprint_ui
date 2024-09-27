import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import { AdminDashboard, AdminHomePage } from '../components/adminComponents'
import { AccountDashBoard } from '../components/ahComponents'
import { CustomerDashBoard } from '../components/customerComponents'
import Registration from '../components/staffComponents/Registration'

import Details from '../components/staffComponents/Details'
import CustomerList from '../components/staffComponents/CustomerList'

function StartupSprintRoutes() {
  return (
    <Routes>
        <Route path = '/' element={<HomePage/>}></Route>
        <Route path= '/admin' element={<AdminDashboard/>}>
                <Route path='' element={<AdminHomePage/>}/>
        </Route>
        <Route path= '/account' element={<AccountDashBoard/>}></Route>
        <Route path= '/customer' element={<CustomerDashBoard/>}></Route>

        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/details' element={<Details/>}></Route>

        <Route path='/Customers' element={<CustomerList/>}></Route>
    </Routes>
  )
}

export default StartupSprintRoutes