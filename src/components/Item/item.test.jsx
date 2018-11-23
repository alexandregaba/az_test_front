import React from 'react';
import Item from './Item';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const props = {
    checked: false,
    name: 'Apples',
    id: '1',
    editMode: false,
  };
  const Component = shallow(<Item {...props} />);
  expect(Component).toMatchSnapshot();
});
