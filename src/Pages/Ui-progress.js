import React from 'react'
import Asideprogress from '../Components/Aside-progress'
import Header from '../Components/Header'
import Progress from '../Components/Progress'

function Uiprogress() {
  return (
    <>
     <Asideprogress/>
     <div className="layout-page">
       <Header/>
       <Progress/>
     </div>
    </>
  )
}

export default Uiprogress