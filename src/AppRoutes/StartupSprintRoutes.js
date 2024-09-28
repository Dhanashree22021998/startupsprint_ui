import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/FeedBack'
import { AdminDashboard, AdminHomePage } from '../components/adminComponents'
import { AccountDashBoard } from '../components/ahComponents'
import { CustomerDashBoard } from '../components/customerComponents'
import FeedbackForm from '../components/FeedBack'
import Feedback_List from '../components/Feedback_List'


function StartupSprintRoutes() {
  return (
    <Routes>
        <Route path = '/' element={<HomePage/>}></Route>
        <Route path= '/admin' element={<AdminDashboard/>}>
                <Route path='' element={<AdminHomePage/>}/>
        </Route>
        <Route path= '/account' element={<AccountDashBoard/>}></Route>
        <Route path= '/customer' element={<CustomerDashBoard/>}></Route>
        <Route path= '/feedback' element={<FeedbackForm/>}></Route>
        <Route path= '/feedback_list' element={<Feedback_List/>}></Route>
    
    </Routes>
  )
}

export default StartupSprintRoutes