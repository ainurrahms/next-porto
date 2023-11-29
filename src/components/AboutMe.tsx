import images from '@constants/images';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="border-t-2 border-solid border-gray-300">
      <div className="padding-global">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16 md:py-24">
            <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-16 rounded-lg border-solid border-gray-300 p-8 md:grid-cols-2 md:gap-x-20">
              <div className="flex gap-x-8 gap-y-8">
                <p className="text-3xl font-bold md:text-4xl">A bit about me.</p>
                <Image
                  className="sm:custom-rotate-1 custom-rotate-2 mt-9 md:transform-none"
                  src={images.arrow}
                  alt="Arrow"
                  width={83}
                  height={24}
                  priority
                />
              </div>
              <div>
                <p className="text-base opacity-60 md:text-lg">
                  A person who love to solving problem with code. Currently passionate about FrontEnd things. Open to
                  discussion about FrontEnd or out of it. Still learning about How JavaScript can be so strong in every
                  platform and focusing learning about React one of the most powerfull library.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
