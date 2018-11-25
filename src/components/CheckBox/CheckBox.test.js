import React from 'react';
import Checkbox from './Checkbox';
import { shallow } from 'enzyme';

const props = {
  checked: false,
  onClick: jest.fn(),
};

it('matches snapshots', () => {
  const Component = shallow(<Checkbox {...props} />);
  expect(Component).toMatchSnapshot();
});

it('it triggers toggleCheckGroceryItem when itemCheck value is changed', () => {
  const Component = shallow(<Checkbox {...props} />);
  Component.find('.check-box').simulate('click');
  expect(props.onClick).toHaveBeenCalled();
});
