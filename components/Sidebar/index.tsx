import React from 'react'
import Link from 'next/link'
import BarsIcon from '../../public/icons/bars.svg'

const Sidebar = () => {
  return (
    <div className="fixed h-screen w-20 top-0 left-0 z-40 bg-dark-200 border-r border-white border-opacity-10 text-white text-center py-8 flex flex-col flex-wrap justify-between overflow-hidden">
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
        <button className="inline-block w-auto border-0 p-0 text-center align-middle text-4xl leading-none">
          <BarsIcon />
        </button>
      </p>
      <div className="w-full h-[40%] flex justify-center items-end">
        <p className="copyrightvertical rotate-180">
          <span>© 2022</span>
          <a
            href="https://github.com/ltghuy"
            target="_blank"
            className="inline-block pt-1 font-medium text-base text-white hover:text-primary"
          >
            _ltghuy
          </a>
        </p>
      </div>
    </div>
  )
}

export default Sidebar
