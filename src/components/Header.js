import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header id='header'>
    <div id='header__links'>
      <NavLink to='/' activeClassName='is-active' exact={true}>max</NavLink>
      <NavLink to='/skills' activeClassName='is-active'>skills</NavLink>
      <NavLink to='/portfolio' activeClassName='is-active'>portfolio</NavLink>
      <NavLink to='/contact' activeClassName='is-active'>contact</NavLink>
    </div>
  </header>
);

export default Header;
