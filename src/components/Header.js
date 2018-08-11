import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div id='header__links'>
      <NavLink to='/' activeClassName='is-active' exact={true}>Max</NavLink>
      <NavLink to='/skills' activeClassName='is-active'>Skills</NavLink>
      <NavLink to='/portfolio' activeClassName='is-active'>Portfolio</NavLink>
      <NavLink to='/contact' activeClassName='is-active'>Contact</NavLink>
      <a href='https://github.com/m-leon'><span class='typcn typcn-social-github-circular'></span></a>
    </div>
  </header>
);

export default Header;
