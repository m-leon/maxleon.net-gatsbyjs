import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';

const Header = () => (
  <header id='header'>
    <div id='header__logo'>
      <Logo />
    </div>
    <div id='header__links'>
      <NavLink to='/' activeClassName='active' exact={true}>max</NavLink>
      <NavLink to='/skills' activeClassName='active'>skills</NavLink>
      <NavLink to='/portfolio' activeClassName='active'>portfolio</NavLink>
      <NavLink to='/contact' activeClassName='active'>contact</NavLink>
    </div>
  </header>
);

export default Header;
