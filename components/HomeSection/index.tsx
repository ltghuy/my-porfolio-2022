import React from 'react'
import Link from 'next/link'
import TextTyping from '../TextTyping'
import FacbookIcon from '../../public/icons/facebook.svg'
import InstagramIcon from '../../public/icons/instagram.svg'
import GithubIcon from '../../public/icons/github.svg'
import LinkedinIcon from '../../public/icons/linkedin.svg'

const HomeSection = () => {
  const socialList = [
    {
      id: 1,
      icon: <FacbookIcon />,
      href: 'https://www.facebook.com/letranxgiahuy',
    },
    {
      id: 2,
      icon: <InstagramIcon />,
      href: 'https://www.instagram.com/_ltghuy/?hl=en',
    },
    { id: 3, icon: <GithubIcon />, href: 'https://github.com/ltghuy' },
    {
      id: 4,
      icon: <LinkedinIcon />,
      href: 'https://www.linkedin.com/in/ltghuy/',
    },
  ]

  return (
    <main className="ml-20 bg-dark-100 text-white">
      <div className="w-full h-screen overflow-hidden relative">
        <div className="w-full h-full absolute left-0 top-0 bg-hero-bg opacity-20"></div>
        <div className="relative">
          <div className="container mx-auto flex justify-center flex-col items-center w-2/3 min-h-screen">
            <div className="w-[150px] h-[150px] relative">
              <div className="w-full h-full absolute bg-gradient-to-tr from-[#59ce8f] via-[#025d3f] to-[#0f172a] rounded-full animate-spin"></div>
              <img
                className="w-full h-full absolute object-cover rounded-full p-[6px]"
                src="/images/huyle.jpg"
                alt="huyle avatar"
              />
            </div>
            <TextTyping
              textArray={['Huy Le', 'Front End Developer']}
              addTextTimer={120}
              removeTextTimer={60}
            />
            <p className="text-center text-lg text-zinc-300">
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <ul className="inline-flex flex-wrap gap-4 mt-7">
              {socialList.map((item) => (
                <li
                  className="group align-middle w-10 h-10 inline-block border border-white border-opacity-10 cursor-pointer relative overflow-hidden rounded"
                  key={item.id}
                >
                  <Link href={item.href} passHref legacyBehavior>
                    <a
                      target="_blank"
                      className="text-lg w-full h-full flex items-center justify-center rounded group-hover:-translate-y-full transition-all duration-500"
                    >
                      {item.icon}
                    </a>
                  </Link>
                  <Link href={item.href} passHref legacyBehavior>
                    <a
                      target="_blank"
                      className="text-lg w-full h-full flex items-center justify-center rounded group-hover:-translate-y-full transition-all duration-500 text-dark-200 bg-primary"
                    >
                      {item.icon}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeSection
