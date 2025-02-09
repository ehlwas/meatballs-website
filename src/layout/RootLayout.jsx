import React from 'react'
import Header from '../components/header/Header'
import LandingPage from '../pages/LandingPage'
import Footer from '../components/footer/Footer'
import Background from '../components/common/Background'

const RootLayout = () => {
  return (
    <div 
      // className='dark:bg-black'
    >
      <Header />

      <Background />
      <div className="page-container">
        <LandingPage />
      </div>

      <Footer />
    </div>
  )
}

export default RootLayout