import React from 'react'
import HTMLIcon from '../../public/icons/skills/html.svg'
import CSSIcon from '../../public/icons/skills/css.svg'
import GitIcon from '../../public/icons/skills/git.svg'
import NextIcon from '../../public/icons/skills/nextjs.svg'
import ReactIcon from '../../public/icons/skills/reactjs.svg'
import ReduxIcon from '../../public/icons/skills/redux.svg'
import SassIcon from '../../public/icons/skills/sass.svg'
import TailwindIcon from '../../public/icons/skills/tailwind.svg'
import TypeScriptIcon from '../../public/icons/skills/typescript.svg'
import VueIcon from '../../public/icons/skills/vuejs.svg'

const SkillSection = () => {
  const skillList = [
    { id: 1, name: 'HTML', icon: <HTMLIcon className="w-[40%]" /> },
    { id: 2, name: 'CSS', icon: <CSSIcon className="w-[40%]" /> },
    { id: 3, name: 'TypeScript', icon: <TypeScriptIcon className="w-[40%]" /> },
    { id: 4, name: 'SASS', icon: <SassIcon className="w-[40%]" /> },
    { id: 5, name: 'TailwindCSS', icon: <TailwindIcon className="w-[40%]" /> },
    { id: 6, name: 'ReactJS', icon: <ReactIcon className="w-[40%]" /> },
    { id: 7, name: 'NextJS', icon: <NextIcon className="w-[40%]" /> },
    { id: 8, name: 'VueJS', icon: <VueIcon className="w-[40%]" /> },
    { id: 9, name: 'Redux', icon: <ReduxIcon className="w-[40%]" /> },
    { id: 10, name: 'Git', icon: <GitIcon className="w-[40%]" /> },
  ]
  return (
    <div className="skill-wrapper relative mb-28">
      <div className="skill-list grid grid-cols-5 gap-10">
        {skillList.map((skill) => (
          <div className="skill-item col-span-1 text-white hover:text-primary flex flex-col items-center transition duration-200">
            {skill.icon}
            <p className="name pt-3 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillSection
