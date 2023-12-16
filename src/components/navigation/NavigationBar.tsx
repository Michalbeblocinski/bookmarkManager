import React from 'react';
import './NavigationBar.scss';
import logo from '../../../assets/images/logo-bookmark.svg';
import HamburgerMenu from '@src/components/navigation/hamburger-menu/hamburgerMenu';
import { Link } from 'react-router-dom';

export const NavigationBar: React.FC = () => {
  return (
    <div className='navigation-bar'>
      <p>
        <img className={'navigation-bar__logo'} alt={'logo'} src={logo} />
      </p>

      <div className={'navigation-bar__menu'}>
        <ul className={'navigation-bar__menu-list'}>
          <li className={'navigation-bar__menu-list-element'}>
            <p>FEATURES</p>
          </li>
          <li className={'navigation-bar__menu-list-element'}>
            <p>PRICING</p>{' '}
          </li>
          <li className={'navigation-bar__menu-list-element'}>
            <p>CONTACT</p>
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
