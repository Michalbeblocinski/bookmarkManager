import React, { useState } from 'react';
import './ExtensionsCard.scss';
import dots from '@assets/icons/bg-dots.svg';

export type ExtensionsCardProps = {
  photoUrl: string;
  title: string;
  text: string;
};
export const ExtensionsCard: React.FC<ExtensionsCardProps> = ({
  photoUrl,
  title,
  text,
}) => {
  return (
    <div className='landing-page__extensions-cards-card'>
      <img
        className={'landing-page__extensions-cards-card-img'}
        alt={'browser'}
        src={photoUrl}
      />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
