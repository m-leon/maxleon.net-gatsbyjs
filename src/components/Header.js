import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to='/' className="header__logo">
      León
    </Link>
    <nav className="header__nav">
      <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
      <NavLink to="/skills" activeClassName="active">Skills</NavLink>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </nav>
  </header>
);

export default Header;
