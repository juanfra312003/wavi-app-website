'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

  // Manage of the state of the responsible design
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    // Open the side menu
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  }

  const closeMenu = () => {
    // Close the side menu
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  }

  return (
    <>
      <nav className='w-full fixed px-5 lg:px-10 xl:px-[8%] flex items-center z-50 bg-[#48D7FF]'>
        {/* Mobile hamburger button */}
        <button className='block md:hidden mr-4' onClick={openMenu}>
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        <Link href="/">
          <Image
            src="/Logos wavi/Logo-sin-fondo-letra-blanca.png"
            alt="Wavi logo"
            width={60}
            height={24}
            className="w-14 sm:w-16 lg:w-20 cursor-pointer mr-8 my-2"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8'>
          <li>
            <Link 
              className='text-white hover:text-gray-200 transition font-bold' 
              href="/quienes-somos"
            >
              Quiénes somos
            </Link>
          </li>
          <li>
            <Link 
              className='text-white hover:text-gray-200 transition font-bold' 
              href="/politicas-de-privacidad"
            >
              Políticas de Privacidad
            </Link>
          </li>
        </ul>

        <div className='flex items-center gap-4 ml-auto'>
        </div>

        {/* Mobile Menu - Responsive Design */}
        <ul 
          ref={sideMenuRef} 
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#48D7FF] transition duration-500'
        >
          <div className='absolute top-6 right-6' onClick={closeMenu}>
            <svg 
              className="w-6 h-6 text-white cursor-pointer" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>
           
          <li>
            <Link 
              className='text-white hover:text-gray-200 transition font-medium text-lg' 
              onClick={closeMenu} 
              href="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              className='text-white hover:text-gray-200 transition font-medium text-lg' 
              onClick={closeMenu} 
              href="/quienes-somos"
            >
              Quiénes somos
            </Link>
          </li>
          <li>
            <Link 
              className='text-white hover:text-gray-200 transition font-medium text-lg' 
              onClick={closeMenu} 
              href="/politicas-de-privacidad"
            >
              Políticas de Privacidad
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
