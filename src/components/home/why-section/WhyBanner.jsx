import React from 'react'
import Image from '../../common/custom/Image'
import TiltedCard from '../../common/custom/reactbitsdev/tilted-card/TiltedCard'

const WhyBanner = () => {
  return (
    <div className='relative bg-black'>
      <div className='flex align-middle justify-center'>

        <div className="relative">
          <Image src='/assets/images/why-section/laptop.png' className='' />
          <div className='absolute top-1/2 left-1/2 -translate-1/2 -mt-6'>
            <TiltedCard
              imageSrc="/assets/images/why-section/laptop-3d.png"
              altText="Laptop"
              containerHeight="700px"
              containerWidth="700px"
              imageHeight="610px"
              imageWidth="500px"
              rotateAmplitude={12}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </div>
        </div>

      </div>

      <div className='absolute top-1/2 -translate-y-1/2 left-60 w-[300px]'>
        <h2 className='text-5xl font-extrabold leading-[4rem]'>
          Why Your
          Business 
          Needs a
          Website?
        </h2>
      </div>
    </div>
  )
}

export default WhyBanner