import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to='/' activeClassName='is-active' exact={true}>Max</NavLink>
    <NavLink to='/skills' activeClassName='is-active'>Skills</NavLink>
    <NavLink to='/portfolio' activeClassName='is-active'>Portfolio</NavLink>
    <NavLink to='/contact' activeClassName='is-active'>Contact</NavLink>
    <a href="https://github.com/m-leon">GitHub</a>
  </header>
);

export default Header;
