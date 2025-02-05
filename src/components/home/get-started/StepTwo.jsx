import { ArrowDown, ArrowLeft } from 'lucide-react'
import React from 'react'
import StepProgress from './StepProgress'
import Image from '../../common/custom/Image'
import StarBorder from '../../common/custom/reactbitsdev/button-star-border/ButtonStarBorder'

const StepTwo = () => {
  return (
    <section className='min-h-[50vh] step-two'>
      
      <StepProgress label='Whats your ideal Visual Theme?' step={1} />

      <div className='flex items-center gap-10'>

        <div className='w-[400px] h-[250px] mt-6'>
          <div className='relative'>
            <Image src='/assets/images/get-started/t-light.png' className="w-full h-full object-cover rounded-lg" />
            <h2 className='text-[#5E5E5E] absolute top-1/2 -translate-y-1/2 text-center w-full text-4xl tracking-widest font-bold'>LIGHT</h2>
          </div>
          <p className='text-sm text-center mt-2'>Bright and Classic with touch of your branding colors</p>
        </div>

        <div className='w-[400px] h-[250px] mt-6'>
          <div className='relative'>
            <Image src='/assets/images/get-started/t-dark.png' className="w-full h-full object-cover rounded-lg" />
            <h2 className='text-[#5E5E5E] absolute top-1/2 -translate-y-1/2 text-center w-full text-4xl tracking-widest font-bold'>DARK</h2>
          </div>
          <p className='text-sm text-center mt-2'>Sleek and Modern with a touch of your branding colors</p>
        </div>

        
        <StarBorder
          as="button"
          className="custom-class"
          color="cyan"
          speed="5s"
        >
          <div className='flex items-center gap-2'>
            Next <ArrowDown />
          </div>
        </StarBorder>

      </div>
      
    </section>
  )
}

export default StepTwo