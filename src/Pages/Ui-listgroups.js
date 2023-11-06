import React from 'react'
import Asidelistgroups from '../Components/Aside-listgroups'
import Header from '../Components/Header'
import Listgroups from '../Components/Listgroups'

function Uilistgroups() {
  return (
    <>
    <Asidelistgroups/>
    <div className="layout-page">
       <Header/>
       <Listgroups/>
     </div>
    
    </>
  )
}

export default Uilistgroups