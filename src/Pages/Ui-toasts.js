import React from 'react'
import Asidetoasts from '../Components/Aside-toasts'
import Header from '../Components/Header'
import Toasts from '../Components/Toasts'
function Uitoasts() {
  return (
    <>
    <Asidetoasts/>
  
  <div className="layout-page">
    <Header/>
    <Toasts/>
  </div>
  </>
      
    
  )
}

export default Uitoasts