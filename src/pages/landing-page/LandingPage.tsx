import React from 'react';
import './LandingPage.scss';
import { Hero } from '@src/components/hero/Hero';
import { Features } from '@src/components/features';

export const LandingPage: React.FC = () => {
  return (
    <div className='landing-page'>
      <Hero />
      <Features />
    </div>
  );
};
