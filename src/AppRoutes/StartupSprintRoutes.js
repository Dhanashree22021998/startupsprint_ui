import React from 'react'

import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import { AdminDashboard, AdminHomePage } from '../components/adminComponents'
import { AccountDashBoard } from '../components/ahComponents'
import { CustomerDashBoard } from '../components/customerComponents'
import EnquiryList from '../components/enquiryComponents/EnquiryList'
import UpdateEnquiryStatus from '../components/enquiryComponents/UpdateEnquiryStatus'




function StartupSprintRoutes() {
  return (
    <Routes>
        <Route path = '/' element={<HomePage/>}></Route>
        <Route path= '/admin' element={<AdminDashboard/>}>
                <Route path='' element={<AdminHomePage/>}/>
        </Route>
        <Route path= '/account' element={<AccountDashBoard/>}></Route>
        <Route path= '/customer' element={<CustomerDashBoard/>}></Route>
        <Route path='/enquiry' element={<EnquiryList/>}></Route>
        <Route path='/update' element={<UpdateEnquiryStatus/>}></Route>

    </Routes>
  )
}

export default StartupSprintRoutes