import React from 'react';
import TextLoop from 'react-text-loop';

const Main = () => (
  <div className='content'>
    <p id='main__tagline'>
      I’m <span id='main__name'>Max Leon</span>, a
      <TextLoop id='main__iam' speed={2000}>
        <span>&nbsp;full-stack web developer</span>
        <span>n app developer</span>
        <span>&nbsp;python hacker</span>
        <span>&nbsp;software engineer</span>
        <span>&nbsp;biker</span>
      </TextLoop> from California.
    </p>
    <span id='main__links'>
      <a href='https://github.com/m-leon'>GitHub</a> &bull; <a href='mailto:max@maxleon.net'>email</a>
    </span>
  </div>
);

export default Main;
