import React from 'react'
import Content from '../Components/Layout/Content'
import Navbar from '../Components/Layout/Navbar'

export const landingPage = () => {
  return (
    <React.Fragment>
      <div className='container px-lg-5 py-lg-3 overflow-hidden' >
        <Navbar />
        <Content />
      </div>
    </React.Fragment>
  )
}
