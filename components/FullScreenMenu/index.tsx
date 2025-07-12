import { useRouter } from 'next/router'
import CloseIcon from '../../public/icons/close.svg'
import styles from './fullScreenMenu.module.scss'

interface FullScreenMenuProps {
  show: boolean
  setShowFullMenu: (show: boolean) => void
}
const FullScreenMenu = ({ show, setShowFullMenu }: FullScreenMenuProps) => {
  const listMenu = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: '/about' },
    { id: 3, label: 'Resume', href: '/resume' },
    { id: 4, label: 'Works', href: '/works' },
    { id: 5, label: 'Contact', href: '/contact' },
  ]

  const router = useRouter()
  const handleClick = (href: string) => {
    router.push(href)
    setShowFullMenu(false)
  }

  return (
    <div
      className={`full-menu w-full md:w-[calc(100%-5rem)] fixed min-h-screen top-0 left-0 md:left-20 bg-dark-100 z-40 text-white ${
        show
          ? 'translate-y-0 transition-all duration-700'
          : 'translate-y-full transition-all duration-700'
      }`}
    >
      <p className="absolute top-0 left-0 text-4xl text-primary font-bold uppercase p-7 block md:hidden">
        Huy Le
        <span className="text-white ml-1">&there4;</span>
      </p>
      <button
        className="close-icon absolute top-4 right-4 w-10 h-10 text-3xl text-primary bg-primary bg-opacity-20 rounded-full border-0 outline-none flex justify-center items-center md:hidden"
        onClick={() => setShowFullMenu(false)}
      >
        <CloseIcon />
      </button>
      <ul className="menu-list w-full h-screen flex justify-between items-center flex-col md:flex-row counter-section py-28 md:py-0">
        {listMenu.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.href)}
            className={`${styles.fullscreen_item} menu-item text-lg md:text-8xl uppercase font-bold md:textvertical md:rotate-180 h-full w-full md:w-auto flex basis-1/5 items-center justify-center md:border-l border-blur md:hover:basis-2/5 text-white md:text-transparent hover:text-primary transition-all duration-500 cursor-pointer`}
          >
            <span className="cursor-scale">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FullScreenMenu
