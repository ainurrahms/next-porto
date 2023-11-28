import images from '@constants/images';
import Image from 'next/image';

const Projects = () => {
  return (
    <section>
      <div className="padding-global-projects">
        <div className="mx-auto w-full max-w-7xl">
          <div className="pb-28 pt-14">
            <div className="mb-20">
              <div className="w-full max-w-3xl">
                <p className="mb-6 text-5xl font-bold">Projects</p>
                <p className="text-xl opacity-60">Highlight of my best projects</p>
              </div>
            </div>
            {/* Projects */}
            <div className="grid grid-cols-2 items-center gap-x-16 border-t border-solid border-gray-300 pt-12">
              <a href="https://calculator-vanilajs.vercel.app/" target="_blank">
                <Image src={images.projectOne} alt="project-one" priority />
              </a>
              <div className="flex flex-col items-start">
                <a href="https://calculator-vanilajs.vercel.app/" className="mb-2 no-underline" target="_blank">
                  <p className="text-4xl font-bold">Calculator</p>
                </a>
                <p className="py-2 opacity-60">
                  This simply app using vanila javascript. To calculate some numbers with each of operator like plus and
                  minus. And after that i give the simple css to make the appearance more attractive.
                </p>
                <a href="https://calculator-vanilajs.vercel.app/" className="underline" target="_blank">
                  View
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-x-16 border-t border-solid border-gray-300 pt-12">
              <a href="https://todo-bootstrap-six.vercel.app/" target="_blank">
                <Image src={images.projectTwo} alt="project-two" priority />
              </a>
              <div className="flex flex-col items-start">
                <a href="https://todo-bootstrap-six.vercel.app/" className="mb-2 no-underline" target="_blank">
                  <p className="text-4xl font-bold">To-Do List</p>
                </a>
                <p className="py-2 opacity-60">
                  This simply app using ReactJS as javascript library and bootstrap for css. This application is
                  intended for listing some daily activity on your life.
                </p>
                <a href="https://todo-bootstrap-six.vercel.app/" className="underline" target="_blank">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
