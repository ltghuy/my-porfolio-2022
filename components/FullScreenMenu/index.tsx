import React from 'react'
import Link from 'next/link'
import styles from './fullScreenMenu.module.scss'

interface FullScreenMenuProps {
  show: boolean
}
const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ show }) => {
  const listMenu = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: '/about' },
    { id: 3, label: 'Resume', href: '/resume' },
    { id: 4, label: 'Works', href: '/works' },
    { id: 5, label: 'Contact', href: '/contact' },
  ]
  return (
    <div
      className={`fullscreen-menu fixed min-h-screen top-0 left-20 bg-dark-100 z-40 text-white ${
        show
          ? 'animate-fadeIn translate-y-0 block'
          : 'animate-fadeOut -translate-y-full'
      }`}
    >
      <ul className="w-full h-screen flex justify-between items-center counter-section">
        {listMenu.map((item) => (
          <li
            key={item.id}
            className={`${styles.fullscreen_item} text-6xl uppercase font-bold textvertical rotate-180 flex basis-1/5 h-full items-center justify-center border-l border-white border-opacity-10 hover:basis-2/5 hover:text-primary transition-all duration-500 cursor-pointer`}
          >
            <Link href={item.href}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FullScreenMenu
