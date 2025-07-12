import SourceIcon from '../../public/icons/github.svg'
import ImageIcon from '../../public/icons/image.svg'

const WorkSection = () => {
  const projectList = [
    {
      id: 1,
      images: '/images/moren.jpg',
      video: '/images/moren.mp4',
      name: 'Moren Ecommerce',
      demo: 'https://moren-ecommerce.vercel.app/',
      github: 'https://github.com/ltghuy/moren-ecommerce',
      sort_description:
        'An e-commerce website that specializes in selling fashion clothing. This project has main features such as: view product list, product information, shopping cart...',
    },
    {
      id: 2,
      images: '/images/2048.jpg',
      video: '/images/2048.mp4',
      name: 'Clone Game 2048',
      demo: 'https://2048-clone-blue.vercel.app/',
      github: 'https://github.com/ltghuy/2048-clone',
      sort_description:
        'A project inspired by motion graphics by Romain Cousin. And this is also my first project with Redux.',
    },
    {
      id: 3,
      images: '/images/pokemon.jpg',
      video: '/images/pokemon.mp4',
      name: 'Pokemon Flip Card',
      demo: 'https://pokemon-flip-card.vercel.app/',
      github: 'https://github.com/ltghuy/pokemon-flip-card',
      sort_description:
        'Based on the classic game of the same name, this project is the first project I built with VueJS after finishing the Youtube tutorial.',
    },
    {
      id: 4,
      images: '/images/remove-bg.jpg',
      video: '/images/remove-bg.mp4',
      name: 'Clone Erase.bg',
      demo: 'https://erase-bg.vercel.app/',
      github: 'https://github.com/ltghuy/erase.bg',
      sort_description:
        'This website provides the feature to separate the subject image from the original image and add a new background to the image after separation.',
    },
    {
      id: 5,
      images: '/images/sky-musik.jpg',
      video: '/images/sky-musik.mp4',
      name: 'Sky Musik',
      demo: 'https://sky-muzik.vercel.app/',
      github: 'https://github.com/ltghuy/sky-muzik',
      sort_description:
        'Built through ZingMp3 API. Allows users to view the latest playlists, artist information, music videos and lyrics....',
    },
  ]
  return (
    <div className="work-wrapper">
      <div className="work-section relative mt-5 grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-16">
        {projectList.map((project) => (
          <div className="work-item col-span-1 card p-5" key={project.id}>
            <div className="top-item group relative overflow-hidden cursor-scale">
              <span className="pt-[70%] md:pt-[55%] block"></span>
              <video
                className="absolute inset-0 m-auto w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                autoPlay
                loop
                muted
                playsInline
                poster={project.images}
                preload="auto"
              >
                <source src={project.video} type="video/mp4" />
              </video>
              <div className="absolute w-full h-full top-0 left-0 bg-dark-200 bg-opacity-75 backdrop-blur-sm transform duration-700 -translate-x-full flex justify-center items-center group-hover:translate-x-0">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-primary text-dark-200 flex items-center justify-center hover:text-white transition mx-2"
                >
                  <ImageIcon />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-primary text-dark-200 flex items-center justify-center hover:text-white transition mx-2"
                >
                  <SourceIcon />
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
      <div className="mt-[60px] text-center cursor-scale">
        <a
          href="https://github.com/ltghuy?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-block outline-none py-3 px-5 bg-primary uppercase text-dark-100 text-sm leading-4 font-medium rounded tracking-wide transition"
        >
          <span className="relative">See all</span>
        </a>
      </div>
    </div>
  )
}

export default WorkSection
