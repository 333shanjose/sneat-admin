import React from 'react'
import Asidefooter from '../Components/Aside-footer'
import Header from '../Components/Header'

import Footer from '../Components/Footer'

function Uifooter() {
  return (
    <>
    <Asidefooter/>
    <div className="layout-page">
       <Header/>
       <Footer/>
     </div>
    
    </>
  )
}

export default Uifooter