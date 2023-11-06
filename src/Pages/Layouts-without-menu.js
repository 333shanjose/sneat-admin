import React from 'react'
import Header1 from '../Components/Header'
import Layoutsmenu from '../Components/Layouts-menu'

function Layoutswithoutmenu() {
  return (
    <>
    <div class="layout-page" style={{paddingLeft:"0px"}}>
        <Header1/>
       <Layoutsmenu/>

    </div>
    
    
    
    
    </>
  )
}

export default Layoutswithoutmenu