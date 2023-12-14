import React from 'react';
import './NavigationBar.scss';
import logo from '../../../assets/images/logo-bookmark.svg';
import HamburgerMenu from '@src/components/navigation/hamburger-menu/hamburgerMenu';

export const NavigationBar: React.FC = () => {
  return (
    <div className='navigation-bar'>
      <a href={'#'}>
        <img className={'navigation-bar__logo'} alt={'logo'} src={logo} />
      </a>
      <div className={'navigation-bar__menu'}>
        <ul className={'navigation-bar__menu-list'}>
          <li className={'navigation-bar__menu-list-element'}>
            <a href={'#'}>FEATURES</a>
          </li>
          <li className={'navigation-bar__menu-list-element'}>
            <a href={'#'}>PRICING</a>
          </li>
          <li className={'navigation-bar__menu-list-element'}>
            <a href={'#'}>CONTACT</a>
          </li>
          <li className={'navigation-bar__menu-list-element'}>
            <button className={'navigation-bar__menu-list-element-button'}>
              LOGIN
            </button>
          </li>
        </ul>
      </div>
      <HamburgerMenu />
    </div>
  );
};
