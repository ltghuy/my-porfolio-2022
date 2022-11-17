import React, { useEffect } from 'react'
import Link from 'next/link'
import TextTyping from '../../components/TextTyping'
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
  useEffect(() => {
    const fadeIn = document.querySelectorAll(
      '.fade-in'
    ) as NodeListOf<HTMLElement>
    for (let i = 0; i < fadeIn.length; ++i) {
      setTimeout(() => {
        fadeIn[i].style.cssText = 'opacity: 1; transform: translateY(0)'
      }, 300 + i * 500)
    }
  }, [])

  return (
    <main className="home-section ml-0 md:ml-20 bg-dark-100 text-white px-4 md:px-0">
      <div className="w-full h-screen overflow-hidden relative">
        <div className="w-full h-full absolute left-0 top-0 bg-hero2-bg md:bg-hero1-bg md:bg-center md:bg-cover opacity-10"></div>
        <div className="relative">
          <div className="py-10 md:py-0 mx-auto flex justify-center flex-col items-center w-full md:w-2/3 min-h-screen">
            <div className="avatar w-[140px] md:w-[150px] h-[140px] md:h-[150px] relative transition-all duration-500 fade-in">
              <div className="w-full h-full absolute bg-gradient-to-tr from-[#59ce8f] via-[#025d3f] to-[#0f172a] rounded-full animate-spin" />
              <img
                className="w-full h-full absolute object-cover rounded-full p-[6px]"
                src="/images/huyle.jpg"
                alt="huyle avatar"
              />
            </div>
            <div className="transition-all duration-500 fade-in">
              <TextTyping
                textArray={[
                  'Le Tran Gia Huy',
                  'Front End Developer',
                  'Freelancer',
                ]}
                addTextTimer={120}
                removeTextTimer={60}
              />
            </div>
            <p className="description text-center text-base md:text-lg text-zinc-300 transition-all duration-500 fade-in">
              I am a frontend web developer. I enjoy coding and the challenge of
              learning something new everyday. My current goal is to pursue a
              career in front-end development.
            </p>
            <ul className="social-list inline-flex flex-wrap gap-4 mt-7 transition-all duration-500 fade-in">
              {socialList.map((item) => (
                <li
                  className="social-item group align-middle w-10 h-10 inline-block border border-blur cursor-pointer relative overflow-hidden rounded"
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
