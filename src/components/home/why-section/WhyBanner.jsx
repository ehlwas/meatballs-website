import React from 'react'
import Image from '../../common/custom/Image'
import TiltedCard from '../../common/custom/reactbitsdev/tilted-card/TiltedCard'

const WhyBanner = () => {
  return (
    <div className='relative'>
      <div className='flex align-middle justify-center'>
        {/* <Image src='/assets/images/why-section/laptop.png' className='w-[730px]' /> */}
        <TiltedCard
          imageSrc="/assets/images/why-section/laptop.png"
          altText="Laptop"
          containerHeight="486px"
          containerWidth="730px"
          imageHeight="486px"
          imageWidth="730px"
          rotateAmplitude={12}
          scaleOnHover={1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={false}
        />
      </div>

      <div className='absolute top-1/2 -translate-y-1/2 left-60 w-[230px]'>
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