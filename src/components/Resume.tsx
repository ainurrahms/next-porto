import images from '@constants/images';
import Image from 'next/image';

const Resume = () => {
  return (
    <section>
      <div className="padding-global">
        <div className="mx-auto w-full max-w-7xl">
          <div className="pb-28 pt-14">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl">
                <div className="mb-6">
                  <p className="text-center text-4xl font-bold">My Resume</p>
                </div>
              </div>
              <div className="resume">
                <div className="ml-[-4px] h-[790px] w-[1050px] overflow-scroll rounded-3xl border-0 bg-transparent">
                  <Image src={images.resume} alt="resume" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
