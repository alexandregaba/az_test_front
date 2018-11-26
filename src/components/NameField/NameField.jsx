import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const EditField = styled.input`
  margin: 3px 0 0;
  line-height: inherit;
  font-size: inherit;
  font-weight: ${props => (props.checked ? 'inherit' : 'bold')};
  color: ${props => (props.checked ? '#46CD7C' : 'inherit')};
  text-decoration: ${props => (props.checked ? 'line-through' : 'inherit')};
  width: 100%;
  height: 30px;
`;

const InnerSpan = styled.span`
  margin: 0 0 0 3px;
  align-self: flex-end;
  padding: 1px;
  color: ${props => (props.checked ? '#46CD7C' : 'inherit')};
  text-decoration: ${props => (props.checked ? 'line-through' : 'inherit')};
  font-weight: ${props => (props.checked ? 'inherit' : 'bold')};
  min-width: 100%;
  line-height: inherit;
  font-size: inherit;
  height: 30px;
`;

const NameField = ({ name, value, editMode, handleInputChange, onPressEnter, ...props }) => {
  if (editMode) {
    return (
      <EditField
        className="edit-field"
        ref={input => input && input.focus()}
        value={value}
        onChange={handleInputChange}
        onKeyPress={onPressEnter}
        {...props}
      />
    );
  }
  return (
    <InnerSpan className="item-name" {...props}>
      {name}
    </InnerSpan>
  );
};
NameField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  editMode: PropTypes.bool,
  handleInputChange: PropTypes.func,
  onPressEnter: PropTypes.func,
};
export default NameField;
