import React from 'react'
import ImageIcon from '../../public/icons/image.svg'
import ShareIcon from '../../public/icons/share.svg'

const WorkSection = () => {
  const projectList = [
    {
      id: 1,
      images: '/images/moren.gif',
      name: 'Moren Ecommerce',
      demo: 'https://moren-ecommerce.vercel.app/',
      github: 'https://github.com/ltghuy/moren-ecommerce',
      sort_description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ipsum repellat quod nam consequatur deleniti fugit sequi. Dolorum, molestias repudiandae?',
    },
    {
      id: 2,
      images: '/images/2048.gif',
      name: 'Clone Game 2048',
      demo: 'https://2048-clone-blue.vercel.app/',
      github: 'https://github.com/ltghuy/2048-clone',
      sort_description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ipsum repellat quod nam consequatur deleniti fugit sequi. Dolorum, molestias repudiandae?',
    },
    {
      id: 3,
      images: '/images/pokemon.gif',
      name: 'Pokemon Flip Card',
      demo: 'https://pokemon-flip-card.vercel.app/',
      github: 'https://github.com/ltghuy/pokemon-flip-card',
      sort_description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ipsum repellat quod nam consequatur deleniti fugit sequi. Dolorum, molestias repudiandae?',
    },
    {
      id: 4,
      images: '/images/remove.gif',
      name: 'Clone Erase.bg',
      demo: 'https://erase-bg.vercel.app/',
      github: 'https://github.com/ltghuy/erase.bg',
      sort_description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ipsum repellat quod nam consequatur deleniti fugit sequi. Dolorum, molestias repudiandae?',
    },
  ]
  return (
    <div className="work-wrapper">
      <div className="work-section relative mt-5 grid grid-cols-2 gap-y-10 gap-x-16">
        {projectList.map((project) => (
          <div className="work-item col-span-1 card p-5" key={project.id}>
            <div className="top-item group relative overflow-hidden">
              <span className="pt-[55%] block"></span>
              <img
                className="absolute inset-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-fill"
                src={project.images}
                alt={project.name}
              />
              <div className="absolute w-full h-full top-0 left-0 bg-dark-200 bg-opacity-75 backdrop-blur-sm transform duration-500 -translate-x-full flex justify-center items-center group-hover:translate-x-0">
                <a
                  href={project.demo}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-primary text-dark-200 flex items-center justify-center hover:text-white transition mx-2"
                >
                  <ImageIcon />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-primary text-dark-200 flex items-center justify-center hover:text-white transition mx-2"
                >
                  <ShareIcon />
                </a>
              </div>
            </div>
            <div className="bottom-item mt-8">
              <h3 className="font-bold text-2xl">- {project.name} -</h3>
              <p className="text-gray-300 text-sm pt-2">
                {project.sort_description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[60px] text-center">
        <a
          href="https://github.com/ltghuy?tab=repositories"
          target="_blank"
          className="inline-block outline-none py-3 px-5 bg-primary uppercase text-dark-100 text-sm leading-4 font-medium rounded tracking-wide transition opacity-80 hover:opacity-100"
        >
          <span className="relative">See all</span>
        </a>
      </div>
    </div>
  )
}

export default WorkSection
