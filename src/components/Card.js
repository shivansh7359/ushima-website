import React from 'react'

const Card = () => {
  return (
    <div className='flex rounded-md shadow-md h-[240px]'>
        <div className='bg-blue-900 w-[20%] rounded-lg'></div>
        <div className='w-[80%] py-3 px-3 mt-3'>
            <span className='text-xl'>|||</span>
            <p className='ml-4 mt-2'>Game is very smooth and get instant cash</p>
            <p className='text-center mt-6'>Manish</p>
        </div>
    </div>
  )
}

export default Card