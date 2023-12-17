import React from 'react';
import logo from '../../../../assets/images/logo-bookmark-white.svg';
import twitter from '../../../../assets/icons/icon-twitter.svg';
import fb from '../../../../assets/icons/icon-facebook.svg';
import './HamburgerMenu.scss';

type MenuProps = {
  className?: string;
};

type MenuState = {
  currentUser: string | null;
};

export const Menu: React.FC<MenuProps> = ({ className }) => {
  return (
    <div className={className}>
      <a href={'#'}>
        <img className={'navigation__logo--white'} alt={'logo'} src={logo} />
      </a>
      <ul className={'navigation__list'}>
        <li className={'navigation__item'}>
          <p>
            <a href={'#'}>FEATURES</a>
          </p>
        </li>
        <li className={'navigation__item'}>
          <p>
            <a href={'#'}>PRICING</a>
          </p>
        </li>
        <li className={'navigation__item'}>
          <p>
            <a href={'#'}>CONTACT</a>
          </p>
        </li>
        <li className={'navigation__item'}>
          <button className={'navigation__item-button'}>LOGIN</button>
        </li>
      </ul>
      <a href={'#'}>
        <img className={'navigation__icon-fb'} alt={'logo'} src={fb} />
      </a>
      <a href={'#'}>
        <img
          className={'navigation__icon-twitter'}
          alt={'logo'}
          src={twitter}
        />
      </a>
    </div>
  );
};
