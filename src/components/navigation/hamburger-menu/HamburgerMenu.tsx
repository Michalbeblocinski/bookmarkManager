//Core
import React from 'react';
import './HamburgerMenu.scss';

//Components

import { Hamburger } from './hamburger';
import { Menu } from './menu';

//Main JSX
class HamburgerMenu extends React.Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <>
        <Hamburger
          onClick={this.handleClick}
          className={
            this.state.isOpen ? `hamburger hamburgeractive` : `hamburger`
          }
        />
        <Menu
          className={
            this.state.isOpen ? `navigation navigationactive` : `navigation `
          }
        />
      </>
    );
  }
}

export default HamburgerMenu;
