import images from '@constants/images';
import Image from 'next/image';
import content from './content';

const Projects = () => {
  return (
    <section>
      <div className="padding-global-projects">
        <div className="mx-auto w-full max-w-7xl">
          <div className="pb-16 pt-14 sm:pb-24 md:pb-28">
            <div className="mb-12 md:mb-20">
              <div className="w-full max-w-3xl">
                <p className="mb-6 text-4xl font-bold md:text-5xl">Projects</p>
                <p className="text-lg opacity-60 md:text-xl">Highlight of my best projects</p>
              </div>
            </div>
            {/* Projects */}
            {content.map((val, idx) => (
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-6 border-t border-solid border-gray-300 pt-8 md:grid-cols-2 md:gap-x-16 md:gap-y-16 md:pt-12">
                <a href={val.link} target="_blank">
                  <Image src={val.src} alt="project-one" priority />
                </a>
                <div className="flex flex-col items-start">
                  <a href={val.link} className="mb-2 no-underline" target="_blank">
                    <p className="text-2xl font-bold sm:text-3xl md:text-4xl">{val.title}</p>
                  </a>
                  <p className="py-2 opacity-60">{val.desc}</p>
                  {val.link && (
                    <a href={val.link} className="underline" target="_blank">
                      View
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
