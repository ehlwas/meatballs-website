import React from 'react'
import Header from '../components/header/Header'
import LandingPage from '../pages/LandingPage'
import Footer from '../components/footer/Footer'
import Backgound from '../components/common/Backgound'

const RootLayout = () => {
  return (
    <div 
      // className='dark:bg-black'
    >
      <Header />

      <Backgound />
      <div className="page-container">
        <LandingPage />
      </div>

      <Footer />
    </div>
  )
}

export default RootLayout