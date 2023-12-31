import React, { useState } from 'react';
import './Features.scss';
import { FeaturesChoices } from '@src/components/features/feature-choices';
import firstImg from '@assets/images/illustration-features-tab-1.svg';
import secondImg from '@assets/images/illustration-features-tab-2.svg';
import thirdImg from '@assets/images/illustration-features-tab-3.svg';
import { ExtensionsInfo } from '@src/components/components-info';
export const Features: React.FC = () => {
  const [firstCard, setFirstCard] = useState<string>(
    'landing-page__features-choices--active',
  );
  const [secondCard, setSecondCard] = useState<string>(
    'landing-page__features-choices--no-active',
  );
  const [thirdCard, setThirdCard] = useState<string>(
    'landing-page__features-choices--no-active',
  );
  const [firstElement, setFirstElement] = useState<string>(
    'landing-page__features-choices-list-element landing-page__features-choices-list-element--clicked',
  );
  const [secondElement, setsSecondElement] = useState<string>(
    'landing-page__features-choices-list-element landing-page__features-choices-list-element--no-clicked',
  );
  const [thirdElement, setThirdElement] = useState<string>(
    'landing-page__features-choices-list-element landing-page__features-choices-list-element--no-clicked',
  );
  const handleVisibleTab1 = () => {
    setFirstCard('landing-page__features-choices--active');
    setSecondCard('landing-page__features-choices--no-active');
    setThirdCard('landing-page__features-choices--no-active');
    setFirstElement(
      'landing-page__features-choices-list-element landing-page__features-choices-list-element--clicked',
    );
    setsSecondElement(
      'landing-page__features-choices-list-element landing-page__features-choices-list-element--no-clicked',
    );
    setThirdElement(
      'landing-page__features-choices-list-element landing-page__features-choices-list-element--no-clicked',
    );
  };
  const handleVisibleTab2 = () => {
    setFirstCard('landing-page__features-choices--no-active');
    setSecondCard('landing-page__features-choices--active');
    setThirdCard('landing-page__features-choices--no-active');
    setFirstElement(
      'landing-page__features-choices-list-element landing-page__features-choices-list-element--no-clicked',
    );
    setsSecondElement(
      'landing-page__features-choices-list-element landing-page__features-choices-list-element--clicked',
    );
    setThirdElement(
      'landing-page__features-choices-list-element landing-page__features-choices-list-element--no-clicked',
    );
  };
  const handleVisibleTab3 = () => {
    setFirstCard('landing-page__features-choices--no-active');
    setSecondCard('landing-page__features-choices--no-active');
    setThirdCard('landing-page__features-choices--active');
    setFirstElement(
      'landing-page__features-choices-list-element landing-page__features-choices-list-element--no-clicked',
    );
    setsSecondElement(
      'landing-page__features-choices-list-element landing-page__features-choices-list-element--no-clicked',
    );
    setThirdElement(
      'landing-page__features-choices-list-element landing-page__features-choices-list-element--clicked',
    );
  };
  const openModal = () => {};
  return (
    <div className='landing-page__features'>
      <ExtensionsInfo
        classNamePrefix={'landing-page__features'}
        text={`Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.`}
        title={'Features'}
      />

      <div className='landing-page__features-choices'>
        <ul className='landing-page__features-choices-list'>
          <li className={firstElement} onClick={handleVisibleTab1}>
            <p>Simple Bookmarking</p>
          </li>
          <li className={secondElement} onClick={handleVisibleTab2}>
            <p>Speedy Searching</p>
          </li>
          <li className={thirdElement} onClick={handleVisibleTab3}>
            <p>Easy Sharing</p>
          </li>
        </ul>
      </div>
      <FeaturesChoices
        active={firstCard}
        version={'first-card'}
        info={openModal}
        photoUrl={firstImg}
        text={
          'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
        }
        title={'Bookmark in one click'}
      />
      <FeaturesChoices
        active={secondCard}
        version={'second-card'}
        info={openModal}
        photoUrl={secondImg}
        text={
          'Our powerful search feature will help you find solved sites in no time at all. No need to trawl through all of your bookmarks'
        }
        title={'Intelligent search'}
      />
      <FeaturesChoices
        active={thirdCard}
        version={'third-card'}
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
