import * as React from 'react';
import './FaqAccordion.scss';
import { useState } from "react";
import up from "@assets/icons/up.svg";
import down from "@assets/icons/down.svg";


export const FaqAccordion: React.FC = () => {
  const [accordionHeaders, setAccordionHeaders] = useState([
    {
      title: 'What is Bookmark?',
      textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      isExpanded: false,
    },
    {
      title: 'How can I request a new browser?',
      textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      isExpanded: false,
    },
    {
      title: 'Is there a mobile app?',
      textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      isExpanded: false,
    },
    {
      title: 'What about other Chromium browsers?',
      textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      isExpanded: false,
    },
  ]);

  const toggleAccordionPanel = (index: any) => {
    console.log("Accordion panel clicked:", index);
    const currentPanel = accordionHeaders[index];
    currentPanel.isExpanded = !currentPanel.isExpanded;
    setAccordionHeaders([...accordionHeaders]);
  };

  return (
    <div className="landing-page__faq-accordions">
      {accordionHeaders.map((header, index) => (
        <div
          className="landing-page__faq-accordions-accordion"
          key={index}
          onClick={() => toggleAccordionPanel(index)}
        >
          <h3 className="landing-page__faq-accordions-accordion-topography">
            {header.title}
            {header.isExpanded ?  <img className={'landing-page__faq-accordions-accordion-topography-arrow'} alt={'arrow'} src={up} /> :  <img className={'landing-page__faq-accordions-accordion-topography-arrow'} alt={'arrow'} src={down} />}
          </h3>
          {header.isExpanded && (
            <p className="landing-page__faq-accordions-accordion-details-text">
              {header.textContent}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

