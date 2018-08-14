import React from 'react';
import { Link } from 'react-router-dom';

const otherPages = [ <a href='https://github.com/m-leon'>my GitHub</a>, <Link to='/skills'>my skills</Link>];

const NotFound = () => (
  <div className='content'>
    <h2 className='content__header'>404</h2>
    <p>Not found. Check out {otherPages[Math.floor(Math.random()*otherPages.length)]}</p>
  </div>
);

export default NotFound;
