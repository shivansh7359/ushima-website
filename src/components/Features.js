import React from 'react'
import logo1 from "../assets/powerfull.png"
import logo2 from "../assets/graphics.png"
import logo3 from "../assets/trophy.png"
import logo4 from "../assets/moneywithdrawal.png"


const Features = () => {
  return (
    <div id='features' className='flex  justify-center h-full'>
        <div className='my-20 w-full'>
          
            <div className='flex flex-col my-20 mx-20'>
                <p className='text-center font-extrabold text-5xl mb-3'>Best Features of <span className='text-blue-900'>Ushima</span></p>
                <div className='flex flex-wrap justify-center gap-3'>
                    <div className='w-[46%] h-[190px] my-10 flex justify-evenly items-center shadow-md'>
                      <img src={logo1} alt="logo1" width={40} />
                      <div>
                        <p className='font-bold text-3xl text-blue-900'>Real Time Players</p>
                        <p className='my-3 font-semibold'>Connect with a vibrant community of players and battle with them</p>
                      </div>
                    </div>
                    <div className='w-[46%] h-[190px] my-10 flex justify-evenly items-center shadow-md'>
                    <img src={logo2} alt="logo2" width={40} className='ml-8'/>
                      <div className='ml-10'>
                        <p className='font-bold text-3xl text-blue-900'>Stunning Visuals</p>
                        <p className='my-3 font-semibold'>The game app offers breathtaking graphics and stunning visual effects that bring the virtual world to life</p>
                      </div>
                    </div>
                    <div className='w-[46%] h-[190px] my-10 flex justify-evenly items-center shadow-md'>
                    <img src={logo3} alt="logo3" width={40}/>
                      <div>
                        <p className='font-bold text-3xl text-blue-900'>Competitive Gameplay</p>
                        <p className='my-3 font-semibold'>Test your skills against other players in thrilling competitive modes</p>
                      </div>
                    </div>
                    <div className='w-[46%] h-[190px] my-10 flex justify-evenly items-center shadow-md'>
                    <img src={logo4} alt="logo4" width={40} className='ml-8'/>
                      <div className='ml-10'>
                        <p className='font-bold text-3xl text-blue-900'>Instant Cash Withdrawal</p>
                        <p className='my-3 font-semibold'>Play the game, Defeat the real time online players, win money and Withdraw Cash instantly</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features