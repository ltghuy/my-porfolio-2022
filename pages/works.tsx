import Head from 'next/head'
import { useState } from 'react'
import Template from '../containers/Template'
import WorkSection from '../containers/WorksSection'

const About = () => {
  const [showFullMenu, setShowFullMenu] = useState<boolean>(false)
  const handleShowMenu = (show: boolean) => {
    setShowFullMenu(show)
  }

  return (
    <div>
      <Head>
        <title>Huy Le Porfolio | Works</title>
        <meta name="description" content="Huy Le Porfolio 2022 | Works" />
      </Head>
      <Template
        showFullMenu={showFullMenu}
        setShowFullMenu={handleShowMenu}
        subTitle="My Works"
        title="Works"
        section={<WorkSection />}
      />
    </div>
  )
}

export default About
