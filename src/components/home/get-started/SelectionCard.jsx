import React from 'react'
import Image from '../../common/custom/Image'

const SelectionCard = ({
  selected = false,
  data = {}
}) => {
  const { img = '', label = '', desc = '', labelColor = '' } = data ?? {}
  
  return (
    <div>
      <div className='relative'>
        <div className='h-[250px]'>
          <Image src={img} className="w-full h-full object-cover rounded-lg" />
        </div>
        <h2 className={`${labelColor} absolute top-1/2 -translate-y-1/2 text-center w-full text-4xl tracking-widest font-bold`}>{label}</h2>
      </div>
      <p className='text-sm text-center text-white/50 mt-2'>{desc}</p>
    </div>
  )
}

export default SelectionCard