import React from 'react'
import GetStartedContainer from '../components/home/get-started/GetStartedContainer'
import WorksContainer from '../components/home/works/WorksContainer'

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
      
      <GetStartedContainer />

      <WorksContainer />
    
    </div>
  )
}

export default LandingPage