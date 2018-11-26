import React from 'react';
import App from './App';
import Immutable from 'immutable';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const props = {
    groceries: Immutable.List([
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
    ]),
  };
  const Component = shallow(<App {...props} />);
  expect(Component).toMatchSnapshot();
});
