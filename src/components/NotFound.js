import React from 'react';
import { Link } from 'react-router-dom';

const otherPages = [<Link to='/portfolio'>my portfolio</Link>, <Link to='/skills'>my skills</Link>];

const NotFound = () => (
  <div className='page__content'>
    <h2 className='page__header'>404</h2>
    <p>Not found. Check out {otherPages[Math.floor(Math.random()*otherPages.length)]}</p>
  </div>
);

export default NotFound;
