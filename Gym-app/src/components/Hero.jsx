//import React from 'react'

import Button from "./Button";

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <h1 className='uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>SWEAT NOW, <span className='text-blue-400'>SHINE LATER</span></h1>
        <p className='text-sm md:text-base font-light'>Achieve your <span className='text-blue-400'>fitness goals </span>with workouts that push your <span className='text-blue-400'>limits</span> and guidance that keeps you <span className='text-blue-400'>motivated</span>. 
        From HIIT to yoga, our app covers it all. Sweat now, shine later with a body that reflects your hard work and dedication!</p>
        <Button text={"Get Started"}/>
    </div>
  )
}
