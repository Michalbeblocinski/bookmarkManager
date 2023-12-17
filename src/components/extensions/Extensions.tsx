import React, { useState } from 'react';
import './Extensions.scss';
import chrome from '@assets/images/logo-chrome.svg';
import firefox from '@assets/images/logo-firefox.svg';
import opera from '@assets/images/logo-opera.svg';
import { ExtensionsCard } from '@src/components/extensions/extension-card/ExtensionCard';
import { ExtensionsInfo } from '@src/components/components-info';

export const Extensions: React.FC = () => {
  return (
    <div className='landing-page__extensions'>
      <ExtensionsInfo
        classNamePrefix={'landing-page__extensions'}
        text={`We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.`}
        title={'Download the extension'}
      />

      <div className='landing-page__extensions-cards'>
        <ExtensionsCard
          photoUrl={chrome}
          title={'Add to Chrome'}
          text={'Minimum version 62'}
        />
        <ExtensionsCard
          photoUrl={firefox}
          title={'Add to Firefox'}
          text={'Minimum version 55'}
        />
        <ExtensionsCard
          photoUrl={opera}
          title={'Add to Opera'}
          text={'Minimum version 46'}
        />
      </div>
    </div>
  );
};
