import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header__logo">
      León
    </div>
    <nav className="header__nav">
      <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
      <NavLink to="/skills" activeClassName="active">Skills</NavLink>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </nav>
  </header>
);

export default Header;
