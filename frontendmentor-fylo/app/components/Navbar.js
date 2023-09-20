import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const navLinks = [
    { text: 'features', href: '/' },
    { text: 'team', href: '/' },
    { text: 'sign in', href: '/' }
]

const Navbar = () => {
  return (
    <div className='px-14 py-16 bg-white flex items-center justify-between'>
          <div>
              <Link href={'/'}>
                  <Image src={'/images/logo.svg'} width={150} height={150} />
              </Link>
          </div>     
          <div className='flex items-center justify-between space-x-12'>
              {navLinks.map((link, index) => (
                  <li key={index} className='list-none capitalize text-very-dark-blue'>
                      <Link href={link.href}>{link.text}</Link>   
                  </li>
              ))}
          </div>
    </div>
  )
}

export default Navbar