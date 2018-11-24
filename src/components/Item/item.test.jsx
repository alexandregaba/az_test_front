import React from 'react';
import Item from './Item';

import { shallow } from 'enzyme';

const props = {
  name: 'orange',
  id: '1',
  checked: false,
  editMode: false,
  startEditGroceryItem: jest.fn(),
  stopEditGroceryItem: jest.fn(),
  deleteGroceryItem: jest.fn(),
  toggleCheckGroceryItem: jest.fn(),
};

it('match snapshot', () => {
  const props = {
    checked: false,
    name: 'Apples',
    id: '1',
    editMode: false,
  };
  const Component = shallow(<Item {...props} />);
  expect(Component).toMatchSnapshot();
});

it('it triggers startEditGroceryItem when editButton is clicked', () => {
  const Component = shallow(<Item {...props} />);
  Component.find('#editButton').simulate('click');
  expect(props.startEditGroceryItem).toHaveBeenCalledWith('1');
});

it('it triggers stopEditGroceryItem when editButton is clicked in editMode', () => {
  const Component = shallow(<Item {...props} editMode />);
  Component.find('#editButton').simulate('click');
  expect(props.stopEditGroceryItem).toHaveBeenCalledWith({
    checked: false,
    id: '1',
    name: 'orange',
  });
});

it('it triggers deleteGroceryItem when deleteButton is clicked', () => {
  const Component = shallow(<Item {...props} editMode />);
  Component.find('#deleteButton').simulate('click');
  expect(props.deleteGroceryItem).toHaveBeenCalledWith('1');
});

it('it triggers toggleCheckGroceryItem when itemCheck value is changed', () => {
  const Component = shallow(<Item {...props} editMode />);
  Component.find('#itemCheck').simulate('change', { target: { checked: true } });
  expect(props.toggleCheckGroceryItem).toHaveBeenCalledWith('1');
});
