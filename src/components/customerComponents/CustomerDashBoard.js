import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerNavbar from './CustomerNavbar'

function CustomerDashBoard() {
  return (
    <div>
      <CustomerNavbar/>
      <Outlet/>
    </div>
    
  )
}

export default CustomerDashBoard