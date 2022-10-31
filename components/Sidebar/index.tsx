import React from 'react'
import Link from 'next/link'
import BarsIcon from '../../public/icons/bars.svg'
import CloseIcon from '../../public/icons/close.svg'

interface SidebarProps {
  show: boolean
  setShowFullMenu: (show: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({ show, setShowFullMenu }) => {
  const toggleFullMenu = () => {
    setShowFullMenu(!show)
  }
  return (
    <div className="fixed h-screen w-20 top-0 left-0 z-40 bg-dark-200 border-r border-blur text-white text-center py-8 flex flex-col flex-wrap justify-between overflow-hidden">
      <div className="w-full h-[40%]">
        <Link href="/">
          <div className="w-[60px] h-[60px] rounded-full inline-block border-2 border-primary overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/images/huyle.jpg"
              alt="avatar"
            />
          </div>
        </Link>
      </div>
      <p className="w-full h-20 flex items-center justify-center">
        <button
          className="inline-block w-auto border-0 p-0 text-center align-middle text-4xl leading-none"
          onClick={toggleFullMenu}
        >
          {!show ? <BarsIcon /> : <CloseIcon />}
        </button>
      </p>
      <div className="w-full h-[40%] flex justify-center items-end">
        <p className="textvertical rotate-180">
          <span className="text-white font-normal opacity-50">© 2022</span>
          <a
            href="https://github.com/ltghuy"
            target="_blank"
            className="inline-block pt-1 font-medium text-base text-white hover:text-primary"
            rel="noreferrer"
          >
            _ltghuy
          </a>
        </p>
      </div>
    </div>
  )
}

export default Sidebar
