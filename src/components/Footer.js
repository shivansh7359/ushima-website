import React from 'react'
import banner from "../assets/banner.png"

const Footer = () => {

    const myStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",  
        width: "100%", 
        overflow: "hidden",
    };


  return (
    <div style={myStyle} className='h-[150px] flex justify-center items-center'>
        <div className='flex flex-col w-[80%]'>
            <div className='font-bold text-center text-2xl'>Ushina is a Proprietary Product of Comely Enterprises Private Limited.</div>
            <div className='flex gap-2 justify-center font-semibold text-yellow-400'>
                <p>©</p>
                <p>2024</p>
                <p>Comely Enterprises Private Limited. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer