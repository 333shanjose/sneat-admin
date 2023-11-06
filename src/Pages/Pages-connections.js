import React from 'react'
import Asideconnections from '../Components/Aside-connections'
import Connections from '../Components/Connections'
import Header from '../Components/Header'

function Pagesconnections() {
  return (
    <>
    <Asideconnections/>
    <div className="layout-page">  
       <Header/>
       <Connections/>

    </div>
    
    </>
  )
}

export default Pagesconnections