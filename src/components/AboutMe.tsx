import images from '@constants/images';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="border-t-2 border-solid border-gray-300">
      <div className="padding-global">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-28">
            <div className="grid-rows-auto grid auto-cols-fr grid-cols-2 items-start gap-x-20 gap-y-16 rounded-lg border-solid border-gray-300 p-8">
              <div className="flex gap-x-8 gap-y-8">
                <p className="text-4xl font-bold">A bit about me.</p>
                <Image className="mt-9" src={images.arrow} alt="Arrow" width={83} height={24} priority />
              </div>
              <div>
                <p className="text-base">
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
