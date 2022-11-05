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
import EducationIcon from '../../public/icons/education.svg'
import WorkIcon from '../../public/icons/work.svg'
import BaseSection from '../../components/BaseSection'
import Timeline from '../../components/Timeline'

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
  const educationTimeline = [
    {
      id: 1,
      time: '2008 - 2010',
      title: 'Higher School Graduation',
      subTitle: 'Abc College.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.',
    },
    {
      id: 2,
      time: '2010 - 2014',
      title: 'Bachelor of Sciences',
      subTitle: 'Def University.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.',
    },
    {
      id: 3,
      time: '2014 - 2016',
      title: 'Masters of Sciences',
      subTitle: 'Def University.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.',
    },
  ]
  const workingTimeline = [
    {
      id: 1,
      time: '2015 - 2017',
      title: 'UI/UX Designer',
      subTitle: 'Abc Company.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.',
    },
    {
      id: 2,
      time: '2017 - 2019',
      title: 'Front-end Developer',
      subTitle: 'Def Company.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.',
    },
    {
      id: 3,
      time: '2019 - Present',
      title: 'Back-end Developer',
      subTitle: 'Ghi Company.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.',
    },
  ]
  return (
    <>
      <div className="skill-wrapper relative mb-28">
        <div className="skill-list grid grid-cols-5 gap-10">
          {skillList.map((skill) => (
            <div
              className="skill-item col-span-1 text-white hover:text-primary flex flex-col items-center transition duration-200"
              key={skill.id}
            >
              {skill.icon}
              <p className="name pt-3 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <BaseSection subTitle="My resume" title="Resume" />
      <div className="grid grid-cols-2 gap-7 relative">
        <div className="education-timeline col-span-1">
          <h4 className="title flex items-center text-primary text-xl font-semibold mb-3">
            <EducationIcon />
            <span className="ml-2 text-white">Educational Qualification</span>
          </h4>
          <Timeline timeLineList={educationTimeline} />
        </div>
        <div className="work-timeline col-span-1">
          <h4 className="title flex items-center text-primary text-xl font-semibold mb-3">
            <WorkIcon />
            <span className="ml-2 text-white">Working Experience</span>
          </h4>
          <Timeline timeLineList={workingTimeline} />
        </div>
      </div>
    </>
  )
}

export default SkillSection
