import React, { useState } from 'react';
import './Features.scss';
import { FeaturesChoices } from '@src/components/features/feature-choices';
import firstImg from '@assets/images/illustration-features-tab-1.svg';
import secondImg from '@assets/images/illustration-features-tab-2.svg';
import thirdImg from '@assets/images/illustration-features-tab-3.svg';
export const Features: React.FC = () => {
  const [firstCard, setFirstCard] = useState<string>('active');
  const [secondCard, setSecondCard] = useState<string>('noactive');
  const [thirdCard, setThirdCard] = useState<string>('noactive');

  const handleVisibleTab1 = () => {
    setFirstCard('active');
    setSecondCard('noactive');
    setThirdCard('noactive');
  };
  const handleVisibleTab2 = () => {
    setFirstCard('noactive');
    setSecondCard('active');
    setThirdCard('noactive');
  };
  const handleVisibleTab3 = () => {
    setFirstCard('noactive');
    setSecondCard('noactive');
    setThirdCard('active');
  };
  const openModal = () => {};
  return (
    <div className='landing-page__features'>
      <div className='landing-page__features-info'>
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go
        </p>
      </div>
      <div className='landing-page__features-choices'>
        <ul className='landing-page__features-choices-list'>
          <li
            className='landing-page__features-choices-list-element'
            onClick={handleVisibleTab1}
          >
            <p>Simple Bookmarking</p>
          </li>
          <li
            className='landing-page__features-choices-list-element'
            onClick={handleVisibleTab2}
          >
            <p>Speedy Searching</p>
          </li>
          <li
            className='landing-page__features-choices-list-element'
            onClick={handleVisibleTab3}
          >
            <p>Easy Sharing</p>
          </li>
        </ul>
      </div>
      <FeaturesChoices
        active={firstCard}
        info={openModal}
        photoUrl={firstImg}
        text={
          'Organize your bookmark however you like. Our simple drag-adn-drop interface gives you complete control over how you manage you favourite sites.'
        }
        title={'Bookmark in one click'}
      />
      <FeaturesChoices
        active={secondCard}
        info={openModal}
        photoUrl={secondImg}
        text={
          'Our powerful search feature will help you find solved sites in no time at all. No need to trawl through all of your bookmarks'
        }
        title={'Intelligent search'}
      />
      <FeaturesChoices
        active={thirdCard}
        info={openModal}
        photoUrl={thirdImg}
        text={
          'Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button.'
        }
        title={'Share your bookmarks'}
      />
    </div>
  );
};
