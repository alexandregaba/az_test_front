import React from 'react';
import CustomSelect from './CustomSelect';
import { shallow } from 'enzyme';

const props = {
  options: [
    { value: '', display: 'All', isDefault: true },
    { value: 'checked', display: 'Checked Only' },
    { value: 'notChecked', display: 'Not checked Only' },
  ],
  selectMe: jest.fn(),
  toggleSelectOpen: jest.fn(),
  isOpened: false,
  selected: { value: '', display: 'All', isDefault: true },
};
it('matches snapshot', () => {
  const ClosedComponent = shallow(<CustomSelect {...props} />);
  expect(ClosedComponent).toMatchSnapshot();

  const OpenComponent = shallow(<CustomSelect {...props} isOpened />);
  expect(OpenComponent).toMatchSnapshot();
});
