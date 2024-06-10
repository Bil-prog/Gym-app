// eslint-disable-next-line no-unused-vars
import React from 'react'

//import Button from "./Button";
import arrowImg from "../assets/yellow-arrow-down.png"

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <h1 className='uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>SWEAT NOW, <span className='text-amber-400'>SHINE LATER</span></h1>
        <p className='text-sm md:text-base font-light'>Achieve your <span className='text-amber-400'>fitness goals </span>with workouts that push your <span className='text-amber-400'>limits</span> and guidance that keeps you <span className='text-amber-400'>motivated</span>. 
        Sweat now, shine later with a body that reflects your hard work and dedication!</p>
        {/* <Button 
          func={() => {window.location.href = '#generate'}} 
          text={"Get Started"}/> */}
        <img src={arrowImg} alt="arrow" className='animate-bounce' />
    </div>

  )
}
