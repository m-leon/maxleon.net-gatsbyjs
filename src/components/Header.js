import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <h1>Max Leon</h1>
    </div>
    <div>
      <NavLink to="/" activeClassName="active" exact={true}>home</NavLink>
      <NavLink to="/skills" activeClassName="active">skills</NavLink>
      <NavLink to="/portfolio" activeClassName="active">portfolio</NavLink>
      <NavLink to="/contact" activeClassName="active">contact</NavLink>
    </div>
  </header>
);

export default Header;
