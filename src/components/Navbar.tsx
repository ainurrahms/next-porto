import images from '@constants/images';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="mx-2% fixed bottom-0 left-0 right-auto top-0 mb-6 mt-6 flex items-start">
      <div className="min-h-4.5rem flex h-auto flex-col items-center justify-between gap-y-4 rounded-full border border-gray-300 p-2 shadow-md">
        <a href="#" className="transition duration-300 hover:scale-110">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-solid border-gray-300 bg-white shadow-md">
            <Image src={images.PP} alt="linkedin-logo" width={50} height={50} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/ainurrahms/"
          target="_blank"
          className="flex h-9 w-9 transform flex-col items-center justify-center rounded-full bg-black transition duration-300 hover:scale-110"
        >
          <Image src={images.linkedin} alt="linkedin-logo" width={18} height={18} />
        </a>
        <a
          href="https://github.com/ainurrahms"
          target="_blank"
          className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-white transition duration-300 hover:scale-110"
        >
          <Image src={images.github} alt="github-logo" width={50} height={50} />
        </a>
        <a
          href="https://dribbble.com/ainurrahms"
          target="_blank"
          className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-white transition duration-300 hover:scale-110"
        >
          <Image src={images.dribbble} alt="dribbble-logo" width={50} height={50} />
        </a>
        <a
          href="https://medium.com/@ainurrahms"
          target="_blank"
          className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-white transition duration-300 hover:scale-110"
        >
          <Image src={images.medium} alt="medium-logo" width={50} height={50} />
        </a>
        <a
          href="mailto:ainurrahms@gmail.com"
          target="_blank"
          className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-black transition duration-300 hover:scale-110"
        >
          <Image src={images.envelope} alt="envelope-logo" width={18} height={18} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
