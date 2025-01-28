import images from 'src/constants/images';
import Image from 'next/image';

const Quote = () => {
  return (
    <section>
      <div className="padding-global">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16 sm:py-24 md:py-28 ">
            <div className="flex flex-col items-center">
              <div className="mx-auto w-full max-w-3xl">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
                  <div className="flex gap-1">
                    <Image className="mt-9" src={images.star} alt="Arrow" width={20} height={20} priority />
                    <Image className="mt-9" src={images.star} alt="Arrow" width={20} height={20} priority />
                    <Image className="mt-9" src={images.star} alt="Arrow" width={20} height={20} priority />
                    <Image className="mt-9" src={images.star} alt="Arrow" width={20} height={20} priority />
                    <Image className="mt-9" src={images.star} alt="Arrow" width={20} height={20} priority />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="my-8 text-center">
                      <p className="italic opacity-60">
                        "O you who have believed, fear Allāh. And let every soul look to what it has put forth for
                        tomorrow - and fear Allāh. Indeed, Allāh is Aware of what you do."
                      </p>
                    </div>
                    <p className="font-semibold">- (QS. Al-Hasyr 59:18)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
