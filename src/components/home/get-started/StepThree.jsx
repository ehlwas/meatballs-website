import React from 'react'
import StepProgress from './StepProgress'
import SelectionCard from './SelectionCard'
import StarBorder from '../../common/custom/reactbitsdev/button-star-border/ButtonStarBorder'
import { ArrowDown } from 'lucide-react'

const cardData = [
  {
    key: 'simple',
    img: '/assets/images/get-started/simple.png',
    label: 'SIMPLE',
    labelColor: 'text-[#9C9C9C]',
    desc: 'Clean and Minimal'
  },
  {
    key: 'modern',
    img: '/assets/images/get-started/modern.png',
    label: 'MODERN',
    labelColor: 'text-[#474747]',
    desc: 'Trendy Interactive'
  },
  {
    key: '-'
  },
  {
    key: 'elegant',
    img: '/assets/images/get-started/elegant.png',
    label: 'ELEGANT',
    labelColor: 'bg-[linear-gradient(180deg,#FFC400_0%,#947100_100%)] bg-clip-text text-transparent',
    desc: 'Sophisticated and Stylish'
  },
  {
    key: 'informative',
    img: '/assets/images/get-started/informative.png',
    label: 'INFORMATIVE',
    labelColor: 'text-[#20394B]',
    desc: 'Content Focused'
  },
]

const StepThree = ({
  handleScroll = () => {}
}) => {
  return (
    <div className='min-h-[50vh] mb-20 step-two'>

      <StepProgress 
        label='Pick your ideal Visual Style?' 
        step={2} 
        handleScroll={() => handleScroll(1)}
      />

      <div className='grid grid-cols-3 gap-10 mt-6'>

        {
          cardData.map(item => {
            const { key } = item

            if (key === '-') {
              return (
                <div></div>
              )
            }
            
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
              onClick={() => handleScroll(3)}
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

export default StepThree