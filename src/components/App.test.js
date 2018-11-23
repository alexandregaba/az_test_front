import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const props = {
    groceries: [
      {
        checked: false,
        name: 'Apples',
      },
      {
        checked: false,
        name: 'Bananas',
      },
    ],
  };
  const div = document.createElement('div');
  ReactDOM.render(<App {...props} />, div);
});
