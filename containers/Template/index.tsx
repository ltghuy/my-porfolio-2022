import React, { ReactNode } from 'react'
import FullScreenMenu from '../../components/FullScreenMenu'
import Sidebar from '../../components/Sidebar'

interface TemplateProps {
  showFullMenu: boolean
  setShowFullMenu: (show: boolean) => void
  section: ReactNode
}
const Template: React.FC<TemplateProps> = ({
  showFullMenu,
  setShowFullMenu,
  section,
}) => {
  return (
    <>
      <Sidebar show={showFullMenu} setShowFullMenu={setShowFullMenu} />
      <FullScreenMenu show={showFullMenu} />
      {section}
    </>
  )
}

export default Template
