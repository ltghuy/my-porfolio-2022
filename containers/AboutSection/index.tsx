import React from 'react'
import BaseSection from '../../components/BaseSection'
import FreeLancerIcon from '../../public/icons/freelancer.svg'
import WebCodeIcon from '../../public/icons/webcode.svg'
import MobileIcon from '../../public/icons/mobile.svg'

const AboutSection = () => {
  const descriptionInfo = [
    { id: 1, title: 'First Name', value: 'Le' },
    { id: 2, title: 'Last Name', value: 'Huy' },
    { id: 3, title: 'Age', value: '23' },
    { id: 4, title: 'Nationality', value: 'Viet Nam' },
    {
      id: 5,
      title: 'Address',
      value: 'Can Tho, Viet Nam',
    },
    { id: 6, title: 'Freelance', value: 'Available' },
    { id: 7, title: 'Hobby', value: 'Anime, Music...' },
  ]

  return (
    <>
      <div className="about-section grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-28 relative">
        <div className="image col-span-1">
          <div className="w-full h-96 bg-gradient-to-tr bg-primary bg-opacity-20 rounded relative animate-bgtowhite">
            <div className="p-2 absolute w-full h-full top-0 left-0 overflow-hidden">
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/images/backdrop2.gif"
                  alt="backdrop"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="info col-span-1">
          <h3 className="text-2xl font-semibold mb-3">
            Hi, I am &nbsp;
            <span className="text-primary">Huy Le</span>
          </h3>
          <ul className="description space-y-1">
            {descriptionInfo.map((description) => (
              <li
                key={description.id}
                className="text-lg text-gray-400 font-normal md:font-medium marker:text-primary list-disc ml-6"
              >
                <span className="min-w-[120px] inline-block">
                  {description.title}
                </span>
                : &nbsp;
                <span>{description.value}</span>
              </li>
            ))}
          </ul>
          <a
            href="my-cv.pdf"
            download="resume.pdf"
            className="inline-block outline-none py-3 px-5 bg-primary uppercase text-white text-sm leading-4 font-medium rounded tracking-wide transition bg-opacity-80 hover:bg-opacity-100 mt-10 md:mt-5"
          >
            <span className="relative">Download Resume</span>
          </a>
        </div>
      </div>
      <BaseSection subTitle="My services" title="Services" />
      <div className="service-wrapper grid grid-cols-1 md:grid-cols-3 gap-7 relative">
        <div className="service card col-span-1 p-5 group transform translate-y-0 hover:-translate-y-2 duration-500">
          <div className="flex justify-between mb-6">
            <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full p-5 text-primary group-hover:text-white transition">
              <FreeLancerIcon />
            </div>
            <p className="text-5xl text-gray-400 font-bold opacity-30">01</p>
          </div>
          <strong className="text-lg mb-3 block">Freelancer</strong>
          <p className="text-gray-400">
            Proven work experience as a Front-end developer. I can work with one
            client or multiple projects at the same time. Besides, I have good
            communication skills.
          </p>
        </div>
        <div className="service card col-span-1 p-5 group transform translate-y-0 hover:-translate-y-2 duration-500">
          <div className="flex justify-between mb-6">
            <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full p-5 text-primary group-hover:text-white transition">
              <WebCodeIcon />
            </div>
            <p className="text-5xl text-gray-400 font-bold opacity-30">02</p>
          </div>
          <strong className="text-lg mb-3 block">Web Development</strong>
          <p className="text-gray-400 min-h-[8rem]">
            Focus on developing new user-facing features. Build reusable code
            and libraries for future use. Ensure high quality graphic standards
            and brand consistency.
          </p>
        </div>
        <div className="service card col-span-1 p-5 group transform translate-y-0 hover:-translate-y-2 duration-500">
          <div className="flex justify-between mb-6">
            <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full p-5 text-primary group-hover:text-white transition">
              <MobileIcon />
            </div>
            <p className="text-5xl text-gray-400 font-bold opacity-30">03</p>
          </div>
          <strong className="text-lg mb-3 block">Mobile responsive</strong>
          <p className="text-gray-400">
            Ensure users can view a web page in multiple browsers or on
            smartphones without affecting its style or functionality for the
            most optimal experience.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutSection
