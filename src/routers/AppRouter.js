import React from 'react';

import Contact    from '../components/Contact';
import Header     from '../components/Header';
import Main       from '../components/Main';
import NotFound   from '../components/NotFound';
import Portfolio  from '../components/Portfolio';
import Skills     from '../components/Skills';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <span>
      <Header />
      <Switch>
        <Route path='/' component={Main} exact={true} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/skills' component={Skills} />
        <Route component={NotFound} />
      </Switch>
    </span>
  </BrowserRouter>
);

export default AppRouter;
