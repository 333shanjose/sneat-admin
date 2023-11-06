import React from 'react'
import Asidebadges from '../Components/Aside-badges'
import Badges from '../Components/Badges'
import Header from '../Components/Header'


function Uibadges() {
  return (
    <>
    <Asidebadges/>
    <div className="layout-page">
       <Header/>
       <Badges/>
    </div>  
    
    </>
  )
}

export default Uibadges