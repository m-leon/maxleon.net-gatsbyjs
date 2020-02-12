import React from 'react';
import { CssBaseline } from '@material-ui/core';

import AppFooter from '../components/AppFooter';
import AppTopBar from '../components/AppTopBar';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Process from '../components/Process';
import SEO from '../components/SEO';
import Services from '../components/Services';
import Values from '../components/Values';

const Index = () => (
  <>
    <CssBaseline />
    <SEO title="Max Leon" />
    <AppTopBar />
    <Hero />
    <Values />
    <Services />
    <Process />
    <Contact />
    <AppFooter />
  </>
);

export default Index;
