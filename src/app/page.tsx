import { Metadata } from 'next';
import type { FC } from 'react';
import LandingPage from './landing-page';

export const metadata: Metadata = {
  title: 'Ainur Rahman',
  description: `This is landing page of ainur rahman's website`,
};

const Page: FC = () => {
  return <LandingPage />;
};

export default Page;
