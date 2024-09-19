import images from '@constants/images';
import Image from 'next/image';

const Resume = () => {
  return (
    <section>
      <div className="padding-global">
        <div className="mx-auto w-full max-w-7xl">
          <div className="pb-16 pt-14 sm:pb-24 md:pb-28">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl">
                <div className="mb-6">
                  <p className="text-center text-3xl font-bold md:text-4xl">My Resume</p>
                </div>
              </div>
              <div className="resume">
                <div className="ml-[-4px] h-[790px] w-[1050px] overflow-scroll rounded-3xl border-0 bg-transparent">
                  <a
                    href="https://drive.google.com/file/d/1QNqJAdKfArdN6mNcuA6Tg4pLDIGARm82/view?usp=sharing"
                    target="_blank"
                  >
                    <Image src={images.resume} alt="resume" priority />
                  </a>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1QNqJAdKfArdN6mNcuA6Tg4pLDIGARm82/view?usp=sharing"
                className="block max-w-full lg:hidden"
                target="_blank"
              >
                <Image
                  src={images.resume}
                  alt="resume"
                  priority
                  className="rounded-lg border border-solid border-gray-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
