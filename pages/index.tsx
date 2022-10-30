import Head from 'next/head'
import { useState } from 'react'
import Template from '../containers/Template'
import HomeSection from '../components/HomeSection'

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
      <Template
        showFullMenu={showFullMenu}
        setShowFullMenu={handleShowMenu}
        section={<HomeSection />}
      />
    </div>
  )
}
