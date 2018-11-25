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

it('matches snapshot', () => {
  const props = {
    checked: false,
    name: 'Apples',
    id: '1',
    editMode: false,
  };
  const Component = shallow(<Item {...props} />);
  expect(Component).toMatchSnapshot();
});

it('triggers startEditGroceryItem', () => {
  const Component = shallow(<Item {...props} />);
  Component.instance().handleEdit();
  expect(props.startEditGroceryItem).toHaveBeenCalledWith('1');
});

it('triggers stopEditGroceryItem', () => {
  const ComponentEditMode = shallow(<Item {...props} editMode />);
  ComponentEditMode.instance().handleEdit();
  expect(props.stopEditGroceryItem).toHaveBeenCalledWith({
    checked: false,
    id: '1',
    name: 'orange',
  });
});

it('triggers deleteGroceryItem', () => {
  const Component = shallow(<Item {...props} />);
  Component.instance().handleDeleteItem();
  expect(props.deleteGroceryItem).toHaveBeenCalledWith('1');
});

it('triggers toggleCheckGroceryItem', () => {
  const Component = shallow(<Item {...props} />);
  Component.instance().handleCheck();
  expect(props.toggleCheckGroceryItem).toHaveBeenCalledWith('1');
});
