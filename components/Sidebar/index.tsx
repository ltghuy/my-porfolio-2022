import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BarsIcon from '../../public/icons/bars.svg'
import CloseIcon from '../../public/icons/close.svg'
import ArrowIcon from '../../public/icons/arrow.svg'
import Avatar from '../../public/images/huyle.jpg'

interface SidebarProps {
  show: boolean
  setShowFullMenu: (show: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({ show, setShowFullMenu }) => {
  const toggleFullMenu = () => {
    setShowFullMenu(!show)
  }
  return (
    <>
      <div className="sidebar fixed h-screen w-20 top-0 left-0 z-40 bg-dark-200 border-r border-blur text-white text-center py-8 hidden md:flex flex-col flex-wrap justify-between overflow-hidden">
        <div className="w-full h-[40%]">
          <Link href="/">
            <div className="logo w-[60px] h-[60px] rounded-full inline-block border-2 border-primary overflow-hidden">
              <Image src={Avatar} alt="avatar" />
            </div>
          </Link>
        </div>
        <p className="toggle-button w-full h-20 flex items-center justify-center">
          <button
            className="inline-block w-auto border-0 p-0 text-center align-middle text-4xl leading-none"
            onClick={toggleFullMenu}
          >
            {!show ? <BarsIcon /> : <CloseIcon />}
          </button>
        </p>
        <div className="coppy-right w-full h-[40%] flex justify-center items-end cursor-scale-small">
          <p className="textvertical rotate-180 cursor-scale">
            <span className="text-white font-normal opacity-50">© 2022</span>
            <a
              href="https://github.com/ltghuy"
              target="_blank"
              rel="noreferrer"
              className="inline-block pt-1 font-medium text-base text-white hover:text-primary"
            >
              _ltghuy
            </a>
          </p>
        </div>
      </div>
      <button
        className="mobile-trigger-menu w-10 h-10 text-3xl text-primary fixed left-0 top-1/2 bg-primary bg-opacity-10 flex md:hidden justify-center items-center z-40"
        onClick={toggleFullMenu}
      >
        <ArrowIcon />
      </button>
    </>
  )
}

export default Sidebar
