import React, { ReactNode } from 'react'
import FullScreenMenu from '../../components/FullScreenMenu'
import Sidebar from '../../components/Sidebar'

interface TemplateProps {
  showFullMenu: boolean
  setShowFullMenu: (show: boolean) => void
  subTitle?: string
  title?: string
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
              <div className="relative pb-14 text-center">
                <h2 className="relative z-10 mb-2 font-bold text-4xl uppercase">
                  {subTitle}
                </h2>
                <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
                  <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
                </span>
                <span className="pointer-events-none absolute left-1/2 -top-1 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase opacity-5">
                  {title}
                </span>
              </div>
              {section}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Template
