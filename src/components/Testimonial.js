import React from 'react'
import Card from './Card'

const Testimonial = () => {
  return (
    <div className='mt-36 mb-28 flex justify-center items-center'>
        <div className=' mt-20 flex flex-col w-[84%]'>
            <p className='font-extrabold text-5xl text-center mb-3 text-blue-900'>What Our Users Say</p>
            <div className='flex flex-wrap gap-16 p-5 mt-10 items-center justify-center'>
                <div className='w-[28%] rounded-lg shadow-xl'>
                    <Card/>
                </div>
                <div className='w-[28%] rounded-lg shadow-xl'>
                    <Card/>
                </div>
                <div className='w-[28%] rounded-lg shadow-xl'>
                    <Card/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial