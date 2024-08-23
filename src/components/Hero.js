import React from 'react'
import banner from "../assets/banner.png"
import screenone from "../assets/screenone.png"

const Hero = () => {

    const myStyle = {
        backgroundImage: `url(${banner})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

  return (
    <div id='home' style={myStyle} className='flex items-center justify-center'>
        <div className='flex items-center gap-32 '>
            <div className="ml-10 h-[350px]">
                <h2 className='mt-20 text-5xl text-blue-900 font-bold'>Ushina</h2>
                <p className='text-orange-400 text-3xl font-semibold'>
                    Play, Have fun and Make Money
                </p>
                <button className='rounded-lg bg-blue-900 px-7 py-3 text-white font-semibold mt-6 text-2xl'>Download</button>
            </div>
            <div className=''>
                <img src={screenone} className='h-[350px]' alt="screenone"/>
            </div>
        </div>        
    </div>
  )
}

export default Hero