import React from 'react'

interface BaseSectionProps {
  subTitle: string
  title: string
}

const BaseSection = ({ subTitle, title }: BaseSectionProps) => {
  return (
    <div className="base-section relative pb-14 text-center overflow-hidden">
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
  )
}

export default BaseSection
