import React from 'react';
import './NavigationBar.scss';
import logo from '../../../assets/images/logo-bookmark.svg';
import HamburgerMenu from '@src/components/navigation/hamburger-menu/hamburgerMenu';
import { Link } from 'react-router-dom';

export const NavigationBar: React.FC = () => {
  return (
    <div className='navigation-bar'>
      <Link to='/'>
        <img className={'navigation-bar__logo'} alt={'logo'} src={logo} />
      </Link>
      <div className={'navigation-bar__menu'}>
        <ul className={'navigation-bar__menu-list'}>
          <li className={'navigation-bar__menu-list-element'}>
            <Link to='/'>
              <p>FEATURES</p>
            </Link>
          </li>
          <li className={'navigation-bar__menu-list-element'}>
            <Link to='/'>
              <p>PRICING</p>
            </Link>
          </li>
          <li className={'navigation-bar__menu-list-element'}>
            <Link to='/'>
              <p>CONTACT</p>
            </Link>
          </li>
          <li className={'navigation-bar__menu-list-element'}>
            <Link to='/'>
              <button className={'navigation-bar__menu-list-element-button'}>
                LOGIN
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <HamburgerMenu />
    </div>
  );
};
