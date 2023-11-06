import React from 'react'
import Asidelayoutsnavbar from '../Components/Aside-layouts-navbar'
import Layoutsnavbar from '../Components/Layouts-navbar'

function Layoutswithoutnavbar() {
  return (
  <>
    <Asidelayoutsnavbar/>
    <div className="layout-page">  
       <Layoutsnavbar/>
    </div>
  
  
  </>
  )
}

export default Layoutswithoutnavbar