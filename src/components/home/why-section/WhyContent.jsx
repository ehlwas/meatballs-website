import React from 'react'

const WhyContent = () => {
  return (
    <div className='why-content-wrapper'>
      <div className='why-content grid grid-cols-2 gap-10 px-30 py-10'>

        <div className='py-12 pr-12 border-r border-b border-[#5C5C5C] rounded-br-2xl'>
          <h4 className='text-3xl font-bold mb-4'>1. Your Online Presence Matters</h4>
          <p className='font-light text-justify'>A website is your business's home on the internet. It gives potential customers a way to find you online, and in today’s world, if you’re not online, you’re invisible. With 4.7 billion internet users globally, your website ensures that you can be found at any time and from anywhere.</p>
        </div>

        <div className='py-12 pl-12'>
          <h4 className='text-3xl font-bold mb-4'>2. 24/7 Availability</h4>
          <p className='font-light text-justify'>Unlike a physical store, your website is always open. Whether it’s midnight or early morning, customers can visit your website, learn about your products or services, make purchases, or get in touch with you. This constant availability creates convenience and boosts customer satisfaction.</p>
        </div>

        <div className='py-12 pr-12'>
          <h4 className='text-3xl font-bold mb-4'>3. Credibility & Trust</h4>
          <p className='font-light text-justify'>In the eyes of today’s consumers, businesses without websites may seem unprofessional or outdated. A well-designed website builds trust and credibility, signaling that you’re a legitimate business. It gives you a platform to showcase your products, services, testimonials, certifications, and reviews—factors that instill confidence in your customers.</p>
        </div>

        <div className='py-12 pl-12 border-l border-t border-[#5C5C5C] rounded-tl-2xl'>
          <h4 className='text-3xl font-bold mb-4'>4. Showcase Your Brand & Values </h4>
          <p className='font-light text-justify'>A website is the perfect place to tell your story. Through your "About Us" section, blog posts, and content, you can share your brand’s mission, vision, and values. It allows you to connect with customers on a deeper level, building relationships that go beyond a simple transaction.</p>
        </div>
            
      </div>
    </div>
  )
}

export default WhyContent