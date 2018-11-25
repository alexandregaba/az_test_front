import React from 'react';
import Checkbox from './Checkbox';
import { shallow } from 'enzyme';

const props = {
  checked: false,
  handleCheck: jest.fn(),
};

it('it triggers toggleCheckGroceryItem when itemCheck value is changed', () => {
  const Component = shallow(<Checkbox {...props} />);
  Component.find('input.checkbox').simulate('change', { target: { checked: true } });
  expect(props.handleCheck).toHaveBeenCalled();
});
