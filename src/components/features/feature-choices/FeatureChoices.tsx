import React from 'react';
import './FeatureChoices.scss';

type FeaturesChoicesProps = {
  active: string;
  title: string;
  text: string;
  info: () => void;
  photoUrl: string;
};
export const FeaturesChoices: React.FC<FeaturesChoicesProps> = ({
  active,
  title,
  text,
  info,
  photoUrl,
}) => {
  return (
    <div className={`landing-page__features-choices  ${active}`}>
      <div className='landing-page__features-choices-photo'>
        <img
          className={'landing-page__features-choices-photo-img'}
          alt={'website'}
          src={photoUrl}
        />
      </div>
      <div className='landing-page__features-choices-info'>
        <h1>{title}</h1>
        <p>{text}</p>
        <button onClick={info}>More Info</button>
      </div>
    </div>
  );
};
