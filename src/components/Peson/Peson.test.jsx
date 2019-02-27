import React from 'react';
import ReactDOM from 'react-dom';
import Peson from './Peson';

it('Peson renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Peson />, div);
  ReactDOM.unmountComponentAtNode(div);
});
