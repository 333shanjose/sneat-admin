import React from 'react'
import Asidenavbar from '../Components/Aside-navbar'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'

function Uinavbar() {
  return (
    <>
    <Asidenavbar/>
    <div className="layout-page">
       <Header/>
       <Navbar/>
     </div>

    
    </>
  )
}

export default Uinavbar