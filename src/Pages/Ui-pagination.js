import React from 'react'
import Asidepagination from '../Components/Aside-pagination'
import Header from '../Components/Header'
import Pagination from '../Components/Pagination'

function Uipagination() {
  return (
    <>
     <Asidepagination/>
     <div className="layout-page">
       <Header/>
       <Pagination/>
     </div>
    </>
  )
}

export default Uipagination