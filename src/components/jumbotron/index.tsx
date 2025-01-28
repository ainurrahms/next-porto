import images from 'src/constants/images';
import Image from 'next/image';

const Jumbotron = () => {
  return (
    <section className="flex h-85vh items-center justify-center ">
      <div className="padding-global">
        <div className="py-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-solid border-gray-300 bg-white shadow-md">
              <Image
                src={images.PP}
                alt="PP-Dummy"
                priority
                width={100}
                height={100}
                className="h-32 w-48 rounded-full object-cover"
              />
            </div>
            <p className="mb-6 text-4xl font-bold md:text-5xl">Hey, I&apos;m Ainur Rahman</p>
            <p className="text-base opacity-60 md:text-lg">- Always Ambitious</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
