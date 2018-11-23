import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const props = {
    groceries: [
      {
        checked: false,
        name: 'Apples',
        id: '1',
        editMode: false,
      },
      {
        checked: false,
        name: 'Oranges',
        id: '2',
        editMode: false,
      },
    ],
  };
  const Component = shallow(<App {...props} />);
  expect(Component).toMatchSnapshot();
});
