import React from 'react'
import Asidecollapse from '../Components/Aside-collapse'
import Collapse from '../Components/Collapse'
import Header from '../Components/Header'

function Uicollapse() {
  return (
    <>
    <Asidecollapse/>
    <div className="layout-page">
       <Header/>
       <Collapse/>
    </div>  
  </>
  )
}

export default Uicollapse