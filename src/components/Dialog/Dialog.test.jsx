import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';

it('Dialog renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
