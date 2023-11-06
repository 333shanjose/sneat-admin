import React from 'react'
import Asidedropdowns from '../Components/Aside-dropdowns'
import Dropdowns from '../Components/Dropdowns'
import Header from '../Components/Header'

function Uidropdowns() {
  return (
    <>
     <Asidedropdowns/>
     <div className="layout-page">
       <Header/>
       <Dropdowns/>
     </div>
    </>
  )
}

export default Uidropdowns