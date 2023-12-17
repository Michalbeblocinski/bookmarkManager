import React from 'react';
import './Application.scss';
import { LandingPage } from '@src/pages';
import { Footer } from '@src/components/footer';
import { NavigationBar } from '@src/components/navigation';
import { BrowserRouter, Router } from 'react-router-dom';

const Application: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavigationBar />
        <LandingPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Application;
