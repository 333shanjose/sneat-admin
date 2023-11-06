import React from 'react'
import Asidefluid from '../Components/Aside-fluid'
import Header from '../Components/Header'
import Layoutsfluid from '../Components/Layouts-fluid'

function Layoutspagefluid() {
  return (
    <>
    <Asidefluid/>
    <div class="layout-page">
       <Header/>
       <Layoutsfluid/>
    </div>
    
    
    </>
  )
}

export default Layoutspagefluid