import React from 'react';
import ReactDOM from 'react-dom';
import Skills from '../../components/Skills';

it('render Skills without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Skills />, div);
  ReactDOM.unmountComponentAtNode(div);
});
