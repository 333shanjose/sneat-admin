import React from 'react'
import Asidenotification from '../Components/Aside-notification'
import Header from '../Components/Header'
import Notification from '../Components/Notification'

function Pagesnotification() {
  return (
    <>
    <Asidenotification/>
    <div className="layout-page">
       <Header/>
       <Notification/>


    </div>
    
    </>
  )
}

export default Pagesnotification