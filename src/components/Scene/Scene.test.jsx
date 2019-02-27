import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './Scene';

it('Scene renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scene />, div);
  ReactDOM.unmountComponentAtNode(div);
});
