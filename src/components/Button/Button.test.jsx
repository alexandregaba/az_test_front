import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

const props = {
  type: 'edit',
  editMode: false,
  handleEdit: jest.fn(),
  handleDelete: jest.fn(),
};

it('matches snapshots', () => {
  const EditButton = shallow(<Button {...props} />);
  expect(EditButton).toMatchSnapshot();

  const DeleteButton = shallow(<Button {...props} type={'delete'} />);
  expect(DeleteButton).toMatchSnapshot();

  const EditButtonEditMode = shallow(<Button {...props} type={'edit'} editMode />);
  expect(EditButtonEditMode).toMatchSnapshot();
});

it('edit button triggers handleEdit', () => {
  const EditButton = shallow(<Button {...props} />);
  EditButton.simulate('click');
  expect(props.handleEdit).toHaveBeenCalled();
});

it('delete button triggers handleEdit', () => {
  const DeleteButton = shallow(<Button {...props} type={'delete'} />);
  DeleteButton.simulate('click');
  expect(props.handleDelete).toHaveBeenCalled();
});
