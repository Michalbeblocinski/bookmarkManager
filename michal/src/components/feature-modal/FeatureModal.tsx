import React, { FC, MouseEvent, useState } from 'react';
import './FeatureModal.scss';
import secondImg from '@assets/images/illustration-features-tab-2.svg';
import { FeaturesChoices } from '@src/components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeatureModal: FC<ModalProps> = ({ isOpen, onClose }) => {
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
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const openModal = () => {};
  return (
    <div
      className={`modal ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className='modal-content'>
        <button className='close-button' onClick={onClose}>
          X
        </button>
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
          active={'landing-page__features-choices--active'}
          version={'second-card'}
          info={openModal}
          photoUrl={secondImg}
          text={
            'Our powerful search feature will help you find solved sites in no time at all. No need to trawl through all of your bookmarks'
          }
          title={'Intelligent search'}
        />
      </div>
    </div>
  );
};
