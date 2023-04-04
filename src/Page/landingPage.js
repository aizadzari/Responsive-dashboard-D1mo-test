import React from 'react'
import Content from '../Components/Layout/Content'
import Navbar from '../Components/Layout/Navbar'

export const landingPage = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <Navbar />
        <Content />
      </div>
    </React.Fragment>
  )
}
