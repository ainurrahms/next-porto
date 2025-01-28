'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

const Jumbotron = dynamic(() => import('@components/jumbotron'), { ssr: false });
const AboutMe = dynamic(() => import('@components/about-me'), { ssr: false });
const Resume = dynamic(() => import('@components/resume'), { ssr: false });
const Quote = dynamic(() => import('@components/quote'), { ssr: false });
const ListProject = dynamic(() => import('@components/list-project'), { ssr: false });
const Footer = dynamic(() => import('@components/footer'), { ssr: false });
const Navbar = dynamic(() => import('@components/navbar'), { ssr: false });

const LandingPage: FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Jumbotron />
        <AboutMe />
        <Resume />
        <Quote />
        <ListProject />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
