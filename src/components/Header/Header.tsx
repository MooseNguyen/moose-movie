import { Link } from 'react-router-dom'
import logo from 'src/assets/images/logo.png'
import './Header.css'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { headerMenu } from 'src/constants/layout'

export const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState<boolean>(false)

  const headerRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const activeHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        setIsHeaderActive(true)
      } else {
        setIsHeaderActive(false)
      }
    }

    window.addEventListener('scroll', activeHeader)
    return () => {
      window.removeEventListener('scroll', activeHeader)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={classNames('fixed top-0 left-0 w-full p-3 z-10 text-white duration-main', {
        'bg-black': isHeaderActive,
        'bg-transparent': !isHeaderActive
      })}
    >
      <div className='container'>
        <div className='grid grid-cols-12 items-end gap-4'>
          <Link to='/' className='flex items-center col-span-3'>
            <img src={logo} alt='logo' className='w-[50px] h-[50px] mr-5' />
            <span className='text-3xl uppercase font-bold animate-flicker text-shadow-flicker'>MooseHD</span>
          </Link>
          <div className='col-span-9 w-full h-full flex items-center justify-end'>
            {headerMenu.map((header, index) => (
              <Link to={header.path} key={index} className='header-item'>
                {header.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
