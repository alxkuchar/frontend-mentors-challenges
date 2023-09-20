import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutSection = () => {
  return (
      <div className='grid grid-cols-2 gap-4 items-center about h-[60vh] mt-32 px-16 py-12'>
          <div>
              <h2 className='text-4xl font-bold text-very-dark-blue leading-relaxed mb-4'>Stay productive, wherever you are</h2>
              <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. <br /> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
              <div className='mt-4'>
                  <Link href={'/'} className='text-moderate-cyan border-b border-moderate-cyan flex w-44'>See how Fylo works &nbsp; <img src='/images/icon-arrow.svg' /></Link>
              </div>
              <div className=' w-96 h-64 bg-white shadow-lg p-10 mt-12 space-y-4'>
                  <img src={'/images/icon-quotes.svg'} className='w-6'></img>
                  <p className='text-very-dark-blue'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                  <div className='flex'>
                      <img src='/images/avatar-testimonial.jpg' className='w-12 rounded-full'></img>
                      <div className='flex-col'>
                          <span className='block font-bold text-very-dark-blue px-4'>Kyle Burton</span>
                          <span className='block text-very-dark-blue px-4'>Founder & CEO, Huddle</span>
                      </div>
                  </div>
              </div>
          </div>
          <Image src={'/images/illustration-2.svg'} width={650} height={650}></Image>
    </div>
  )
}

export default AboutSection