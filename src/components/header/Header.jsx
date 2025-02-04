import React from 'react'
import Button from '../common/custom/Button'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-white/30 dark:bg-black/30'>
      <div className="flex justify-between items-center max-w-[1600px] mx-auto p-5 dark:text-white">

        <a href="#">MEATBALLS</a>

        <div className="flex items-center gap-5">

          <ul className='flex items-center gap-5'>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>

          <Button>Let's Talk</Button>
          
        </div>
        
      </div>
    </div>
  )
}

export default Header