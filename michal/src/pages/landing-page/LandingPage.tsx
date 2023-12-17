import React from 'react';
import './LandingPage.scss';
import { Hero } from '@src/components/hero';
import { Extensions, Faq, Features, Newsletter } from '@src/components';

export const LandingPage: React.FC = () => {
  return (
    <div className='landing-page'>
      <Hero />
      <Features />
      <Extensions />
      <Faq />
      <Newsletter />
    </div>
  );
};
