import React, { useEffect, useState } from 'react';
import './NavigationBar.scss';
import logo from '../../../assets/images/logo-bookmark.svg';
import HamburgerMenu from '@src/components/navigation/hamburger-menu/hamburgerMenu';
import { Link } from 'react-router-dom';
import { FeatureModal } from '@src/components/feature-modal';

export const NavigationBar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(false); //true
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModalAfterTime = () => {
    const timeoutId = setTimeout(() => {
      setModalOpen(true);
    }, 30000);
  };

  useEffect(() => {
    handleOpenModalAfterTime();
  }, []);

  return (
    <div className='navigation-bar' onMouseEnter={handleOpenModal}>
      <FeatureModal isOpen={isModalOpen} onClose={handleCloseModal} />
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
