import React from 'react';
import NameField from './NameField';
import { shallow } from 'enzyme';

const props = {
  name: 'orange',
  value: 'orange',
  editMode: false,
  checked: false,
  handleInputChange: jest.fn(),
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
  EditComponent.find('.edit-field').simulate('change', { target: { vale: 'Apple' } });
  expect(props.handleInputChange).toHaveBeenCalled();
});
