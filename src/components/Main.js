import React from 'react';
import TextLoop from 'react-text-loop';

const Main = () => (
  <div className='content content__main'>
    <span id='main__tagline'>
      <p>I’m <span id='main__name'>Max Leon</span>,</p>
      <TextLoop speed={2000}>
        <span>a full-stack web developer</span>
        <span>an app developer</span>
        <span>a python hacker</span>
        <span>a software engineer</span>
        <span>a bicyclist</span>
      </TextLoop>
      <p>from California.</p>
    </span>
    <span id='main__links'>
      <a href='https://github.com/m-leon'>GitHub</a> &bull; <a href='mailto:max@maxleon.net'>email</a>
    </span>
  </div>
);

export default Main;
