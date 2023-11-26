import Image from 'next/image';
import { Inter } from 'next/font/google';
import images from '@constants/images';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`w-full max-w-none ${inter.className}`}>
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
                    discussion about FrontEnd or out of it. Still learning about How JavaScript can be so strong in
                    every platform and focusing learning about React one of the most powerfull library.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Resume */}
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
      {/* Describe */}
      <section>
        <div className="padding-global">
          <div className="mx-auto w-full max-w-7xl">
            <div className="py-28">
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
                          "Wahai orang-orang yang beriman, bertakwalah kepada Allah dan hendaklah setiap orang
                          memperhatikan apa yang telah diperbuatnya untuk hari esok (akhirat). Bertakwalah kepada Allah.
                          Sesungguhnya Allah Mahateliti terhadap apa yang kamu kerjakan."
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
      {/* Projects */}
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
