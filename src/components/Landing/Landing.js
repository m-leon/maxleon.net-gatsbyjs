import React from 'react';

import AppFooter from '../AppFooter';
import AppTopBar from '../AppTopBar';
import Contact from './Contact';
import Hero from './Hero';
import Process from './Process';
import Services from './Services';
import Values from './Values';

const Landing = () => (
  <>
    <AppTopBar />
    <Hero />
    <Values />
    <Services />
    <Process />
    <Contact />
    <AppFooter />
  </>
);

export default Landing;
