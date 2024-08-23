import React from 'react'
import screentwo from "../assets/screentwo.png"

const About = () => {
  return (
    <div id='about' className='my-20 flex  mx-24'>
        <div className='flex flex-col gap-5 mt-16 ml-24 mr-4 w-[60%]'>
            <p className='font-extrabold text-5xl ml-2 text-blue-900'>About Us</p>
            
            <p className='w-full mb-5 mt-1 ml-2 text-xl font-semibold'>Ushina is the two-player online game application is an exceptional platform that allows you to connect and compete with players from around the world in thrilling head-to-head battles.</p>
            
            <p className='w-full font-semibold ml-2 text-xl'>Players can track their progress within each game, unlocking achievements and earning rewards as they reach significant milestones. This feature adds a sense of accomplishment and encourages players to keep progressing and exploring new levels and challenges.</p>
        </div>
        <div>
            <img 
                src={screentwo} 
                alt="screentwo" 
                width={270}
                height={270}
                className='mx-32'
            />
        </div>
    </div>
  )
}

export default About