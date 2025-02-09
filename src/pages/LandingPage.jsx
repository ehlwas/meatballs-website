import React from 'react'
import GetStartedContainer from '../components/home/get-started/GetStartedContainer'
import WorksContainer from '../components/home/works/WorksContainer'
import WhyContainer from '../components/home/why-section/WhyContainer'
import StepsToBuildWeb from '../components/home/steps-to-build-web/StepsToBuildWeb'

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
      
      <GetStartedContainer />

      <WorksContainer />

      <WhyContainer />

      <StepsToBuildWeb />
    
    </div>
  )
}

export default LandingPage