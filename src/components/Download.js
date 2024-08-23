import React from 'react'
import screentwo from "../assets/screentwo.png"

const Download = () => {
  return (
    <div className='my-20 flex  mx-24'>
        <div>
            <img 
                src={screentwo} 
                alt="screentwo" 
                width={270}
                height={270}
                className='mx-32'
            />
        </div>
        <div className='flex flex-col gap-5 mt-16 ml-24 mr-4 w-[60%]'>
            <p className='font-bold my-2 text-5xl ml-2'>Download the latest version of our app</p>
            
            <p className='w-full mb-5 mt-1 font-semibold ml-2'>Get the Latest Version of Ushina Gaming App.</p>
            
            <button className='rounded-md bg-blue-900 px-7 py-3 text-white font-semibold mt-6 text-2xl w-[25%] ml-2'>Download</button>
            
        </div>
        
    </div>
  )
}

export default Download