import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from '../../common/custom/Image'
import BackgroundVideo from '../../common/BackgroundVideo'

const WorksContainer = () => {
  return (
    <div className='text-white mt-20 p-20 overflow-hidden relative'>

      <div className='text-right'>
        <h2 className='text-4xl font-extrabold mb-6'>Don’t just take our word for it</h2>
        <p>
          check out some of our past projects to see the stunning
          <br />websites we’ve created for businesses just like yours.
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper swiper-works mt-16"
      >
        <SwiperSlide>
          <div className='img-container rounded-4xl overflow-hidden'>
            <Image src='/assets/images/works/work-1.png' className='w-full h-full object-cover object-top' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img-container rounded-4xl overflow-hidden'>
            <Image src='/assets/images/works/work-2.png' className='w-full h-full object-cover object-top' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img-container rounded-4xl overflow-hidden'>
            <Image src='/assets/images/works/work-3.png' className='w-full h-full object-cover object-top' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img-container rounded-4xl overflow-hidden'>
            <Image src='/assets/images/works/work-1.png' className='w-full h-full object-cover object-top' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img-container rounded-4xl overflow-hidden'>
            <Image src='/assets/images/works/work-2.png' className='w-full h-full object-cover object-top' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img-container rounded-4xl overflow-hidden'>
            <Image src='/assets/images/works/work-3.png' className='w-full h-full object-cover object-top' />
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default WorksContainer