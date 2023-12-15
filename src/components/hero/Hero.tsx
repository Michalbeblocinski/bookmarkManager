import React from 'react';
import './Hero.scss';
import heroPhoto from '@assets/images/illustration-hero.svg';

export const Hero: React.FC = () => {
  return (
    <div className='landing-page__hero'>
      <div className='landing-page__hero-info'>
        <h1>
          A Simple Bookmark <br />
          Manager
        </h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={'test'}>
          <div className='landing-page__hero-info-buttons'>
            <button className='landing-page__hero-info-buttons-button landing-page__hero-info-buttons-button--left'>
              Get it on Chrome
            </button>
            <button className='landing-page__hero-info-buttons-button landing-page__hero-info-buttons-button--right'>
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
      <div className='landing-page__hero-photo'>
        <img
          className={'landing-page__hero-photo-img'}
          alt={'website'}
          src={heroPhoto}
        />
      </div>
    </div>
  );
};
