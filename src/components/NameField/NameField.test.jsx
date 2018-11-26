import React from 'react';
import NameField from './NameField';
import { shallow } from 'enzyme';

const props = {
  name: 'orange',
  value: 'orange',
  editMode: false,
  checked: false,
  handleInputChange: jest.fn(),
  onPressEnter: jest.fn(),
};

it('matches snapshot', () => {
  const Component = shallow(<NameField {...props} />);
  expect(Component).toMatchSnapshot();
});
it('render span or input depending of editMode', () => {
  const Component = shallow(<NameField {...props} />);
  expect(Component.find('.item-name').length).toBe(1);

  const EditComponent = shallow(<NameField {...props} editMode />);
  expect(EditComponent.find('.edit-field').length).toBe(1);
});

it('use handleChange on changes', () => {
  const EditComponent = shallow(<NameField {...props} editMode />);
  EditComponent.find('.edit-field').simulate('change', { target: { value: 'Apple' } });
  expect(props.handleInputChange).toHaveBeenCalled();
});

it('use onPressEnter on enter', () => {
  const EditComponent = shallow(<NameField {...props} editMode />);
  EditComponent.find('.edit-field').simulate('keypress', { key: 'enter' });
  expect(props.onPressEnter).toHaveBeenCalled();
});
