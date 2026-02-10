'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socialLinks = [
  {
    title: 'Instagram',
    icon: '/Iconos pagina web/Icono instagram.png',
    link: 'https://www.instagram.com/wavi.app'
  },
  {
    title: 'Tik Tok',
    icon: '/Iconos pagina web/Icono Tik Tok.png',
    link: 'https://www.tiktok.com/@wavi.app'
  },
  {
    title: 'Whatsapp',
    icon: '/Iconos pagina web/Icono-whatsapp.png',
    link: 'https://chat.whatsapp.com/L2Ua3RhUNSrGprdSbT8R9J?mode=gi_t'
  }
]

const Footer = () => {
  return (
    <div className='bg-white py-4'>
      <div className='mx-[5%] lg:mx-[10%]'>
        {/* Top section with logo and social icons */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 py-4'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href="/">
              <Image
                src="/Logos wavi/Logo-sin-fondo-letra-azul.png"
                alt="Wavi logo"
                width={100}
                height={40}
                className="w-20 sm:w-24"
              />
            </Link>
          </div>

          {/* Social Icons */}
          <ul className='flex items-center gap-8 justify-center'>
            {socialLinks.map((item, index) => (
              <li key={index} className='flex flex-col items-center'>
                <a 
                  href={item.link} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='flex flex-col items-center hover:opacity-70 transition'
                >
                  <Image 
                    src={item.icon} 
                    alt={item.title} 
                    width={32}
                    height={32}
                    className='w-8 h-8'
                  />
                  <p className='text-gray-700 text-sm mt-1'>{item.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider line */}
        <div className='border-t border-[#48D7FF]'></div>

        {/* Bottom section with copyright */}
        <div className='text-center py-4'>
          <p className='text-gray-500 text-sm'>
            © {new Date().getFullYear()} Wavi - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
