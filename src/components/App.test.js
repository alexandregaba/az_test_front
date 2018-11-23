import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

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
  const Component = shallow(<App {...props} />);
  expect(Component).toMatchSnapshot();
});
