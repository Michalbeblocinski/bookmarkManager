import React from 'react';
import { FaqAccordion } from '@src/components';
import './Faq.scss';
export const Faq: React.FC = () => {
  return (
    <div className='landing-page__faq'>
      <div className='landing-page__faq-info'>
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <FaqAccordion />
      <button className='landing-page__faq-button'>More Info</button>
    </div>
  );
};
