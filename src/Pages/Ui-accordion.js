import React from 'react'
import Accordion from '../Components/Accordion'
import Asideaccordion from '../Components/Aside-accordion'
import Header from '../Components/Header'

function Uiaccordion() {
  return (
    <>
    <Asideaccordion/>
    <div className="layout-page">
       <Header/>
       <Accordion/>
       
    </div>
    
    
    </>
  )
}

export default Uiaccordion