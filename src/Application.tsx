import React from 'react';
import './Application.scss';
import { LandingPage } from '@src/pages';
import { Footer } from '@src/components/footer';
import { NavigationBar } from '@src/components/navigation';

const Application: React.FC = () => {
  return (
    <div className='App'>
      <NavigationBar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Application;
