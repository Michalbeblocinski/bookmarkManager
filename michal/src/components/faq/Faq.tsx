import React from 'react';
import { FaqAccordion } from '@src/components';
import './Faq.scss';
import { ExtensionsInfo } from '@src/components/components-info';
export const Faq: React.FC = () => {
  return (
    <div className='landing-page__faq'>
      <ExtensionsInfo
        classNamePrefix={'landing-page__faq'}
        text={`Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.`}
        title={'Frequently Asked Questions'}
      />

      <FaqAccordion />
      <button className='landing-page__faq-button'>More Info</button>
    </div>
  );
};
