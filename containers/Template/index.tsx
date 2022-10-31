import React, { ReactNode } from 'react'
import BaseSection from '../../components/BaseSection'
import FullScreenMenu from '../../components/FullScreenMenu'
import Sidebar from '../../components/Sidebar'

interface TemplateProps {
  showFullMenu: boolean
  setShowFullMenu: (show: boolean) => void
  subTitle: string
  title: string
  section: ReactNode
}
const Template: React.FC<TemplateProps> = ({
  showFullMenu,
  setShowFullMenu,
  subTitle,
  title,
  section,
}) => {
  return (
    <>
      <Sidebar show={showFullMenu} setShowFullMenu={setShowFullMenu} />
      <FullScreenMenu show={showFullMenu} setShowFullMenu={setShowFullMenu} />
      <main className="ml-20 min-h-screen bg-dark-50 text-white relative">
        <div className="fixed top-0 right-0 left-auto w-full h-screen flex justify-around">
          <span className="border-r border-white border-opacity-5"></span>
          <span className="border-r border-white border-opacity-5"></span>
          <span className="border-r border-white border-opacity-5"></span>
          <span className="border-r border-white border-opacity-5"></span>
          <span className="border-r border-white border-opacity-5"></span>
        </div>
        <div className="min-h-screen flex justify-center items-center z-30">
          <section className="py-28 w-full">
            <div className="container mx-auto">
              <BaseSection subTitle={subTitle} title={title} />
              {section}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Template
