import React from 'react';
import './Footer.scss';
import logo from '../../../assets/images/logo-bookmark-footer.svg';
import { Link } from 'react-router-dom';
import fb from '@assets/icons/icon-facebook.svg';
import fbRed from '@assets/icons/icon-facebook-red.svg';
import twitter from '@assets/icons/icon-twitter.svg';
import twitterRed from '@assets/icons/icon-twitter-red.svg';

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <Link to='/'>
        <img className={'footer__logo'} alt={'logo'} src={logo} />
      </Link>
      <div className={'footer__menu'}>
        <ul className={'footer__menu-list'}>
          <li className={'footer__menu-list-element'}>
            <Link to='/'>
              <p>FEATURES</p>
            </Link>
          </li>
          <li className={'footer__menu-list-element'}>
            <Link to='/'>
              <p>PRICING</p>
            </Link>
          </li>
          <li className={'footer__menu-list-element'}>
            <Link to='/'>
              <p>CONTACT</p>
            </Link>
          </li>
          <li className={'footer__menu-list-element'}>
            <a href={'#'}>
              <img
                className={'footer__menu-list-element-icon-fb'}
                alt={'logo'}
                src={fb}
                onMouseOver={(e) => (e.currentTarget.src = fbRed)}
                onMouseOut={(e) => (e.currentTarget.src = fb)}
              />
            </a>
            <a href={'#'}>
              <img
                className={'footer__menu-list-element-icon-twitter'}
                alt={'logo'}
                src={twitter}
                onMouseOver={(e) => (e.currentTarget.src = twitterRed)}
                onMouseOut={(e) => (e.currentTarget.src = twitter)}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
