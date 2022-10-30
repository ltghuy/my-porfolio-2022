import React, { useState } from 'react'
import Head from 'next/head'
import ContactSection from '../components/ContactSection'
import Template from '../containers/Template'

const Contact = () => {
  const [showFullMenu, setShowFullMenu] = useState<boolean>(false)
  const handleShowMenu = (show: boolean) => {
    setShowFullMenu(show)
  }

  return (
    <div>
      <Head>
        <title>Huy Le Porfolio | Contact</title>
        <meta name="description" content="Huy Le Porfolio 2022 | Contact" />
      </Head>
      <Template
        showFullMenu={showFullMenu}
        setShowFullMenu={handleShowMenu}
        section={<ContactSection />}
      />
    </div>
  )
}

export default Contact
