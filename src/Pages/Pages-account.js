import React from 'react'
import Account from '../Components/Account'
import Asideaccount from '../Components/Aside-account'
import Header from '../Components/Header'

function Pagesaccount() {
  return (
    <>
    <Asideaccount/>
    <div className="layout-page">  
       <Header/>
       <Account/>

    </div>
    
    
    </>
  )
}

export default Pagesaccount