import React from 'react'
import Asideoffcanvas from '../Components/Aside-offcanvas'
import Header from '../Components/Header'
import Offcanvas from '../Components/Offcanvas'

function Uioffcanvas() {
  return (
    <>
     
     <Asideoffcanvas/>
     <div className="layout-page">
       <Header/>
       <Offcanvas/>
     </div>

    
    </>
  )
}

export default Uioffcanvas