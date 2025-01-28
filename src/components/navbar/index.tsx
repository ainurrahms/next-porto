import images from 'src/constants/images';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mx-auto mb-6 mt-6 flex h-full max-h-14">
      <div className="mx-auto flex h-full min-h-full w-max items-center justify-between gap-4 rounded-full border border-gray-300 bg-white p-2 shadow-md">
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
