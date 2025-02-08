import { ArrowDown, ArrowLeft } from 'lucide-react'
import React from 'react'
import StepProgress from './StepProgress'
import Image from '../../common/custom/Image'
import StarBorder from '../../common/custom/reactbitsdev/button-star-border/ButtonStarBorder'
import SelectionCard from './SelectionCard'

const cardData = [
  {
    key: 'light',
    img: '/assets/images/get-started/t-light.png',
    label: 'LIGHT',
    labelColor: 'text-[#5E5E5E]',
    desc: 'Bright and Classic with touch of your branding colors'
  },
  {
    key: 'dark',
    img: '/assets/images/get-started/t-dark.png',
    labelColor: 'text-[#5E5E5E]',
    label: 'DARK',
    desc: 'Sleek and Modern with a touch of your branding colors'
  },
]

const StepTwo = ({
  handleScroll = () => {},
}) => {
  return (
    <div className='min-h-[50vh] mb-20 step-two'>
      
      <StepProgress
        label='Whats your ideal Visual Theme?'
        step={1}
        handleScrollUp={() => handleScroll(0)}
      />

      <div className='grid grid-cols-3 gap-10 mt-6'>

        {
          cardData.map(item => {
            const { key } = item
            
            return (
              <SelectionCard key={key} data={item} />
            )
          })
        }
        
        <div className="relative">
          <div className='absolute top-1/2 -translate-y-1/2'>
            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="5s"
              onClick={() => handleScroll(2)}
            >
              <div className='flex items-center gap-2'>
                Next <ArrowDown />
              </div>
            </StarBorder>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default StepTwo