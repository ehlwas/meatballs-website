import React from 'react'
import StepProgress from './StepProgress'
import { ArrowDown } from 'lucide-react'
import StarBorder from '../../common/custom/reactbitsdev/button-star-border/ButtonStarBorder'
import SelectionCard from './SelectionCard'


const cardData = [
  {
    key: 'ecommerce',
    img: '/assets/images/get-started/ecommerce.png',
    label: 'E-COMMERCE',
    labelColor: 'text-[#434242]',
    desc: 'Selling Products Online'
  },
  {
    key: 'portfolio',
    img: '/assets/images/get-started/portfolio.png',
    label: 'PORTFOLIO',
    labelColor: 'text-[#CFCFCF]',
    desc: 'Showcasing Work or Services'
  },
  {
    key: 'corporate',
    img: '/assets/images/get-started/corporate.png',
    label: 'CORPORATE',
    labelColor: 'text-[#FCFCFC]',
    desc: 'Professional & Business Focused'
  },
  {
    key: 'landing-page',
    img: '/assets/images/get-started/landing-page.png',
    label: 'LANDING PAGE',
    labelColor: 'text-[#FFF]',
    desc: 'For Campaigns & Lead Generation'
  },
  {
    key: 'blog-news',
    img: '/assets/images/get-started/blogs-news.png',
    label: 'BLOGS/NEWS',
    labelColor: 'text-[#FFF]',
    desc: 'Content Driven'
  },
]

const StepFour = ({
  handleScroll = () => {}
}) => {
  return (
    <div className='min-h-[50vh] mb-20 step-two'>

      <StepProgress 
        label='What is the purpose of this site?' 
        step={3} 
        handleScroll={() => handleScroll(2)}
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

export default StepFour