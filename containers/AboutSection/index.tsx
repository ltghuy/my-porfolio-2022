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
      value: 'Bui Thi Xuan, Ninh Kieu, Can Tho, Viet Nam',
    },
    { id: 6, title: 'Freelance', value: 'Available' },
  ]

  return (
    <>
      <div className="grid grid-cols-2 gap-10 items-center mb-28 relative">
        <div className="avatarcol-span-1">
          <div className="w-full h-96 bg-gradient-to-tr bg-primary bg-opacity-20 rounded relative">
            <div className="p-2 absolute w-full h-full top-0 left-0">
              <div className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/images/backdrop2.jpg"
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
                className="text-lg text-gray-400 font-medium marker:text-primary list-disc ml-6"
              >
                <strong className="min-w-[120px] inline-block">
                  {description.title}
                </strong>
                : &nbsp;
                {description.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BaseSection subTitle="My services" title="Services" />
      <div className="service-wrapper grid grid-cols-3 gap-7 relative">
        <div className="service card col-span-1 p-5 group transform translate-y-0 hover:-translate-y-2 duration-500">
          <div className="flex justify-between mb-6">
            <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full p-5 text-primary group-hover:text-white transition">
              <FreeLancerIcon />
            </div>
            <p className="text-5xl text-gray-400 font-bold opacity-30">01</p>
          </div>
          <strong className="text-lg mb-3 block">Freelancer</strong>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam
            etiam venenatis mi tristique amet cras diam etiam.
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
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam
            etiam venenatis mi tristique amet cras diam etiam.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam
            etiam venenatis mi tristique amet cras diam etiam.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutSection
