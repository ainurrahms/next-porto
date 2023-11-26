import Image from 'next/image'
import { Inter } from 'next/font/google'
import images from '@constants/images'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`max-w-none w-full ${inter.className}`}
    >
      <section className="h-85vh bg-white bg-contain flex justify-center items-center bg-gradient-jumbotron">
        <div className='padding-global'>
          <div className='py-16'>
            <div className='text-center flex flex-col justify-center items-center'>
              <div className='w-32 h-32 bg-white border border-solid border-gray-300 rounded-full justify-center shadow-md items-center flex mb-6'>
                <Image
                  src={images.PP}
                  alt="PP-Dummy"
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <p className='font-bold text-5xl mb-6'>Hey, I&apos;m Ainur Rahman</p>
              <p className='text-base opacity-60'>- Always Ambitious</p>
            </div>
          </div>
        </div>
      </section>
      <section className='border-t-2 border-solid border-gray-300'>
        <div className='padding-global'>
          <div className='w-full max-w-7xl mx-auto'>
            <div className='py-28'>
              <div className="grid gap-x-20 gap-y-16 border-solid border-gray-300 rounded-lg grid-cols-2 grid-rows-auto auto-cols-fr items-start p-8">
                <div className='flex gap-x-8 gap-y-8'>
                  <p className='font-bold text-4xl'>A bit about me.</p>
                  <Image
                  className='mt-9'
                    src={images.arrow}
                    alt="Arrow"
                    width={83}
                    height={24}
                    priority
                  />
                </div>
                <div>
                  <p className='text-base'>A person who love to solving problem with code. Currently passionate about FrontEnd things. Open to discussion about FrontEnd or out of it. Still learning about How JavaScript can be so strong in every platform and focusing learning about React one of the most powerfull library.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
