import React from 'react';
import './HamburgerMenu.scss';

interface HamburgerProps {
  className?: string;
  onClick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ className, onClick }) => (
  <button onClick={onClick} className={className}>
    <span className={'hamburger__box'}>
      <span className={'hamburger__inner'} />
    </span>
  </button>
);
