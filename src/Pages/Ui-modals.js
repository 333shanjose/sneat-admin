import React from 'react'
import Asidemodals from '../Components/Aside-modals'
import Header from '../Components/Header'
import Modals from '../Components/Modals'

function Uimodals() {
  return (
    <>
    <Asidemodals/>
    <div className="layout-page">
       <Header/>
       <Modals/>
     </div>
    
    </>
  )
}

export default Uimodals