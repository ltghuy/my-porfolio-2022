import Head from 'next/head'
import { useState } from 'react'
import AboutSection from '../containers/AboutSection'
import Template from '../containers/Template'

const About = () => {
  const [showFullMenu, setShowFullMenu] = useState<boolean>(false)
  const handleShowMenu = (show: boolean) => {
    setShowFullMenu(show)
  }

  return (
    <div>
      <Head>
        <title>Huy Le Portfolio | About</title>
        <meta name="description" content="Huy Le Portfolio 2022 | About" />
      </Head>
      <Template
        showFullMenu={showFullMenu}
        setShowFullMenu={handleShowMenu}
        subTitle="About Me"
        title="About"
        section={<AboutSection />}
      />
    </div>
  )
}

export default About
