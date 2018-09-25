import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Contact    from '../components/Contact';
import ContactSuccess from '../components/ContactSuccess';
import Header     from '../components/Header';
import Main       from '../components/Main';
import NotFound   from '../components/NotFound';
import Portfolio  from '../components/Portfolio';
import Skills     from '../components/Skills';

const AppRouter = () => (
  <BrowserRouter>
    <span>
      <Header />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/" component={Main} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/sent" component={ContactSuccess} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route component={NotFound} />
      </AnimatedSwitch>
    </span>
  </BrowserRouter>
);

export default AppRouter;
