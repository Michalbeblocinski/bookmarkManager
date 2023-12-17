import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FaqAccordion.scss';

export const FaqAccordion: React.FC = () => {
  return (
    <div className='landing-page__faq-accordions'>
      <Accordion className={'landing-page__faq-accordions-accordion'}>
        <AccordionSummary
          className='landing-page__faq-accordions-accordion-summary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className='landing-page__faq-accordions-accordion-topography'>
            What is Bookmark?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='landing-page__faq-accordions-accordion-details'>
          <Typography className='landing-page__faq-accordions-accordion-details-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={'landing-page__faq-accordions-accordion'}>
        <AccordionSummary
          className='landing-page__faq-accordions-accordion-summary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className='landing-page__faq-accordions-accordion-topography'>
            How can I request a new browser?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='landing-page__faq-accordions-accordion-details'>
          <Typography className='landing-page__faq-accordions-accordion-details-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={'landing-page__faq-accordions-accordion'}>
        <AccordionSummary
          className='landing-page__faq-accordions-accordion-summary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className='landing-page__faq-accordions-accordion-topography'>
            Is there a mobile app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='landing-page__faq-accordions-accordion-details'>
          <Typography className='landing-page__faq-accordions-accordion-details-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={'landing-page__faq-accordions-accordion'}>
        <AccordionSummary
          className='landing-page__faq-accordions-accordion-summary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className='landing-page__faq-accordions-accordion-topography'>
            What about other Chromium browsers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='landing-page__faq-accordions-accordion-details'>
          <Typography className='landing-page__faq-accordions-accordion-details-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
