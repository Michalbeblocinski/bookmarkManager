import React from 'react';
import './LandingPage.scss';
import { Hero } from '@src/components/hero/Hero';

export const LandingPage: React.FC = () => {
  return (
    <div className='landing-page'>
      <Hero />
    </div>
  );
};
