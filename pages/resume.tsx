import Head from 'next/head'
import { useState } from 'react'
import SkillSection from '../containers/SkillSection'
import Template from '../containers/Template'

const Resume = () => {
  const [showFullMenu, setShowFullMenu] = useState<boolean>(false)
  const handleShowMenu = (show: boolean) => {
    setShowFullMenu(show)
  }

  return (
    <div>
      <Head>
        <title>Huy Le Porfolio | Resume</title>
        <meta name="description" content="Huy Le Porfolio 2022 | Resume" />
      </Head>
      <Template
        showFullMenu={showFullMenu}
        setShowFullMenu={handleShowMenu}
        subTitle="My Skills"
        title="Skills"
        section={<SkillSection />}
      />
    </div>
  )
}

export default Resume
