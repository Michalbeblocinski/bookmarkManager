import React, { useState, useEffect } from 'react';
import './Newsletter.scss';
import { NewsletterForm } from '@src/components';

export const Newsletter: React.FC = () => {
  const [joinedCount, setJoinedCount] = useState<number>(35000);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + 20000;

    const updateCount = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < 20000) {
        const newCount = Math.round(35000 * (1 - elapsedTime / 20000));
        setJoinedCount(newCount);
        requestAnimationFrame(updateCount);
      } else {
        setJoinedCount(35000);
      }
    };

    updateCount();
  }, []);

  return (
    <div className='landing-page__newsletter'>
      <div className='landing-page__newsletter-info'>
        <h2>
          <span>{joinedCount}</span>+ ALREADY JOINED
        </h2>
        <h1>Stay up-to-date with what we're doing</h1>
        <NewsletterForm />
      </div>
    </div>
  );
};
