import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const MyplantLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default MyplantLayout;
