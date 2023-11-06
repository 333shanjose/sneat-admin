import React from 'react'
import Asidecontainer from '../Components/Aside-container'
import Header from '../Components/Header'
import Layoutscontainer from '../Components/Layouts-container'

function Layoutspagecontainer() {
  return (
    <>
    <Asidecontainer/>
    <div class="layout-page">
       <Header/>
       <Layoutscontainer/>
    </div>
    
    </>
  )
}

export default Layoutspagecontainer