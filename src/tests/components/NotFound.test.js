import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from '../../components/NotFound';

it('render NotFound without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});
