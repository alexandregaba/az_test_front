import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerButton = styled.button`
  height: 1.5em;
  min-width: 5em;
  margin: 3px 0;
  border: none;
  &:focus {
    outline: 0;
  }
  justify-self: space-between;
  background: transparent;
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const EditButton = styled(InnerButton)`
  margin-left: 10px;
`;

const DeleteButton = styled(InnerButton)`
  margin-right: 0;
`;

const Button = ({ type, editMode, handleEdit, handleDelete }) => {
  if (type === 'edit') {
    return (
      <EditButton className="editButton" onClick={handleEdit}>
        {editMode ? 'Save' : 'Edit'}
      </EditButton>
    );
  }
  return (
    <DeleteButton className="editButton" onClick={handleDelete}>
      Delete
    </DeleteButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  editMode: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};

export default Button;
