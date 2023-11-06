import React from 'react'
import Asidespinners from '../Components/Aside-spinners'
import Header from '../Components/Header'
import Spinners from '../Components/Spinners'

function Uispinners() {
  return (
    <>
      <Asidespinners/>
      <div className="layout-page">
       <Header/>
       <Spinners/>
     </div>
    </>
  )
}

export default Uispinners