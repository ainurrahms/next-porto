import images from '@constants/images';
import Image from 'next/image';

const Jumbotron = () => {
  return (
    <section className="bg-gradient-jumbotron flex h-85vh items-center justify-center bg-white bg-contain">
      <div className="padding-global">
        <div className="py-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-solid border-gray-300 bg-white shadow-md">
              <Image src={images.PP} alt="PP-Dummy" priority />
            </div>
            <p className="mb-6 text-5xl font-bold">Hey, I&apos;m Ainur Rahman</p>
            <p className="text-base opacity-60">- Always Ambitious</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
