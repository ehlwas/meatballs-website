import React, { useRef } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'

const GetStartedContainer = () => {
  const sectionRef = useRef([])
  
  const handleScroll = (index) => {
    sectionRef.current[index].scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <div className='max-h-[50vh] max-w-[1600px] overflow-hidden mx-auto px-2 dark:text-white'>
      
      <section ref={el => (sectionRef.current[0] = el)}>
        <StepOne 
          handleScroll={handleScroll} 
        />
      </section>

      <section ref={el => (sectionRef.current[1] = el)}>
        <StepTwo 
          handleScroll={handleScroll} 
        />
      </section>

      <section ref={el => (sectionRef.current[2] = el)}>
        <StepThree
          handleScroll={handleScroll}
        />
      </section>

      <section ref={el => (sectionRef.current[3] = el)}>
        <StepFour
          handleScroll={handleScroll}
        />
      </section>
      
    </div>
  )
}

export default GetStartedContainer