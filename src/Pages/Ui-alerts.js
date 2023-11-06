import React from 'react'
import Alerts from '../Components/Alerts'
import Asidealerts from '../Components/Aside-alerts'
import Header from '../Components/Header'

function Uialerts() {
  return (
    <>
    <Asidealerts/>
    <div className="layout-page">
       <Header/>
       <Alerts/>
       
    </div>
    
    
    </>
  )
}

export default Uialerts