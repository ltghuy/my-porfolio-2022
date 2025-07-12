import Head from 'next/head'
import { useState } from 'react'
import FullScreenMenu from '../components/FullScreenMenu'
import Sidebar from '../components/Sidebar'
import HomeSection from '../containers/HomeSection'

export default function Home() {
  const [showFullMenu, setShowFullMenu] = useState<boolean>(false)
  const handleShowMenu = (show: boolean) => {
    setShowFullMenu(show)
  }

  return (
    <div>
      <Head>
        <title>Huy Le | Porfolio 2022</title>
        <meta name="description" content="Huy Le | Porfolio 2022" />
      </Head>
      <Sidebar show={showFullMenu} setShowFullMenu={handleShowMenu} />
      <FullScreenMenu show={showFullMenu} setShowFullMenu={handleShowMenu} />
      <HomeSection />
    </div>
  )
}
