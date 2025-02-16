import React from 'react'
import Header from '../components/header/Header'
import LandingPage from '../pages/LandingPage'
import Footer from '../components/footer/Footer'
import MainBackground from '../components/common/MainBackground'

const RootLayout = () => {
  return (
    <div 
      // className='dark:bg-black'
    >
      <Header />

      <MainBackground />
      <div className="page-container">
        <LandingPage />
      </div>

      <Footer />
    </div>
  )
}

export default RootLayout