import React from 'react'
import Button from '../../common/custom/Button'
import Image from '../../common/custom/Image'
import StarBorder from '../../common/custom/reactbitsdev/button-star-border/ButtonStarBorder'

const StepOne = () => {
  return (
    <section className='flex items-stretch justify-center dark:text-white step-one min-h-[50vh]'>
      
      <div className="flex flex-col flex-1 items-center justify-center">

        <div className='px-5 max-w-[400px] mx-auto'>
          <h1 className='text-4xl font-bold mb-4'>Let's start from here</h1>
          <p>Help Us Understand Your Vision</p>

          <div className="flex justify-center mt-15">
            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="5s"
            >
              Get Started
            </StarBorder>
          </div>
        </div>
        
      </div>

      <div className="flex-1 relative min-h-[50vh]">

        <div className='p-2 rounded w-8/12 absolute top-5 left-10 img-holder'>
          <Image src='/assets/images/get-started/image-13.png' className="" />
        </div>
        <div className='p-2 rounded w-8/12 absolute bottom-5 right-10 img-holder'>
          <Image src='/assets/images/get-started/image-14.png' className="" />
        </div>
        
      </div>

      
    </section>
  )
}

export default StepOne