import Image from 'next/image';
import { Inter } from 'next/font/google';
import images from '@constants/images';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Jumbotron from '@components/Jumbotron';
import AboutMe from '@components/AboutMe';
import Resume from '@components/Resume';
import Quote from '@components/Quote';
import Projects from '@components/Projects';
import Footer from '@components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Halo, Aku Ainur</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Ainur Rahman Portfolio" key="ainurrahms" />
      </Head>
      <div className="flex flex-col items-center">
        {/* Navbar */}
        <Navbar />
        <main className={`w-full max-w-none ${inter.className}`}>
          <Jumbotron />
          <AboutMe />
          <Resume />
          <Quote />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}
