import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default () => (
  <header>
    <Link to='/' className="header__logo">
      León
    </Link>
    <nav className="header__nav">
      <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
      <NavLink to="/skills" activeClassName="active">Skills</NavLink>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
      <a href="https://drive.google.com/open?id=1X09SqLUoggYEKpkK8npcWi6X5ubpZzdw">Resume</a>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </nav>
  </header>
);
