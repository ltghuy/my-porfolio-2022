import React from 'react'
import HTMLIcon from '../../public/icons/skills/html.svg'
import CSSIcon from '../../public/icons/skills/css.svg'
import GitIcon from '../../public/icons/skills/git.svg'
import NextIcon from '../../public/icons/skills/nextjs.svg'
import ReactIcon from '../../public/icons/skills/reactjs.svg'
import ReactQueryIcon from '../../public/icons/skills/react-query.svg'
import ReduxIcon from '../../public/icons/skills/redux.svg'
import ZustandIcon from '../../public/icons/skills/zustand.svg'
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
    {
      id: 7,
      name: 'React Query',
      icon: <ReactQueryIcon className="w-[40%]" />,
    },
    { id: 8, name: 'NextJS', icon: <NextIcon className="w-[40%]" /> },
    { id: 9, name: 'VueJS', icon: <VueIcon className="w-[40%]" /> },
    { id: 10, name: 'Redux', icon: <ReduxIcon className="w-[40%]" /> },
    { id: 11, name: 'Zustand', icon: <ZustandIcon className="w-[40%]" /> },
    { id: 12, name: 'Git', icon: <GitIcon className="w-[40%]" /> },
  ]
  const educationTimeline = [
    {
      id: 1,
      time: '2021 - Present',
      title: 'Self learning',
      subTitle: 'Udemy, FreeCodeCamp',
      desc: `<ul class='list-disc'><li>Learn about VueJS, TailwindCSS.</li><li>Apply the knowledge learned to build a few personal projects.</li><li>Improve language skills.</li></ul>`,
    },
    {
      id: 2,
      time: '2017 - 2021',
      title: 'College graduation',
      subTitle: 'Can Tho university.',
      desc: `<ul class='list-disc'><li>Basic knowledge of programming, algorithms, computers.</li><li>System Analysis and Design.</li/><li>Building a programming mindset.</li><li>Get familiar with the database.</li></ul>`,
    },
  ]
  const workingTimeline = [
    {
      id: 1,
      time: '03/2022 - Present',
      title: 'Front-end Developer',
      subTitle: 'Skyblaze Studios.',
      desc: `<ul class='list-disc'><li>Develop and maintain front-end functionality of websites.</li><li>Do multiple projects simultaneously with high standards and performance.</li/><li>Get involved in creating a website from scratch.</li><li>Participate in finding and fixing bugs to optimize project performance.</li></ul>`,
    },
    {
      id: 2,
      time: '01/2022',
      title: 'Front-end Developer - Intern',
      subTitle: 'Skyblaze Studios.',
      desc: `<ul class='list-disc'><li>Learn about ReactJS framework, Typescript and Git.</li><li>Approach the workflow and participate in the construction of a few real projects.</li/></ul>`,
    },
  ]
  return (
    <>
      <div className="skill-wrapper relative mb-28">
        <div className="skill-list grid grid-cols-2 md:grid-cols-4 gap-12">
          {skillList.map((skill) => (
            <div
              className="skill-item col-span-1 text-white md:hover:text-primary flex flex-col items-center transition duration-200 md:hover:scale-110 cursor-scale"
              key={skill.id}
            >
              {skill.icon}
              <p className="name pt-3 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <BaseSection subTitle="My resume" title="Resume" />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 relative">
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
