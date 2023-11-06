import React from 'react'
import Asidecarousel from '../Components/Aside-carousel'
import Carousel from '../Components/Carousel'
import Header from '../Components/Header'

function Uicarousel() {
  return (
    <>
    <Asidecarousel/>
    <div className="layout-page">
       <Header/>
       <Carousel/>
    </div>  
    
    </>
  )
}

export default Uicarousel