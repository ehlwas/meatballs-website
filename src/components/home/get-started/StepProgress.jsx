import { ArrowLeft } from 'lucide-react'
import React from 'react'

const StepProgress = ({
  label = '',
  step = 1
}) => {
  
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center gap-2'>
        <ArrowLeft />
        <p>{label}</p>
      </div>

      <div className='get-started-dots flex items-center gap-6 '>
        {
          [1, 2, 3, 4].map(dot => {
            return (
              <div key={`${dot}-${step}`} className={`w-5 h-5 bg-cyan rounded-full border-2 border-white ${step >= dot ? 'bg-[#3BA726]' : ''} get-started-dot`}></div>
            )
          })
        }
      </div>
    </div>
  )
}

export default StepProgress