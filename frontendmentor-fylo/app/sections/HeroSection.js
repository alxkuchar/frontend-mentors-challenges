import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <main className='grid grid-cols-2 gap-2 px-16 items-center'>
        <div className='leading-relaxed'>
            <h2 className='text-4xl text-very-dark-blue font-bold pb-4'>All your files in one secure <br />location, accessible anywhere.</h2>
            <p className='text-very-dark-blue text-lg'>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers. </p>
          <div className='flex flex-row space-x-4 mt-4'>
              <input type='text' placeholder='Enter your email...' className='p-2 border rounded-sm w-[250px]'></input>
              <button className='bg-bright-blue text-light-grayish-blue px-12 rounded-sm shadow-sm shadow-bright-blue'>Get Started</button>
          </div>
        </div>
        <div>
          <Image src={'/images/illustration-1.svg'} width={650} height={650}/>
      </div>
    </main>
  )
}

export default HeroSection