import React from 'react';
import { Link } from 'react-router-dom';

const otherPages = [
  <a href='https://github.com/m-leon'>my GitHub</a>,
  <Link to='/skills'>my skills</Link>,
  <Link to='/portfolio'>my work</Link>
];

const NotFound = () => (
  <section>
    <h2>404</h2>
    <p>Not found. Check out {otherPages[Math.floor(Math.random()*otherPages.length)]}</p>
  </section>
);

export default NotFound;
