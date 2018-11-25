import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CheckBox from '../CheckBox/CheckBox';
import NameField from '../NameField/NameField';
import Button from '../Button/Button';

const Li = styled.li`
  list-style-type: none;
  width: 100%;
  border-bottom: solid 1px gainsboro;
  margin-bottom: 5px;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
`;

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = { editInputValue: this.props.name };
  }

  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    checked: PropTypes.bool,
    editMode: PropTypes.bool,
    startEditGroceryItem: PropTypes.func,
    stopEditGroceryItem: PropTypes.func,
  };

  static defaultProps = {
    name: '',
    id: 1,
    checked: false,
    editMode: false,
    startEditGroceryItem: () => {},
    stopEditGroceryItem: () => {},
  };

  handleEdit() {
    if (!this.props.editMode) {
      this.props.startEditGroceryItem(this.props.id);
    } else {
      const { checked, id } = this.props;
      const item = {
        name: this.state.editInputValue,
        checked,
        id,
      };
      this.props.stopEditGroceryItem(item);
    }
  }

  onPressEnter = event => {
    if (event.key === 'Enter') {
      this.handleEdit();
    }
  };

  handleInputChange(event) {
    this.setState({ editInputValue: event.target.value });
  }

  handleDeleteItem() {
    this.props.deleteGroceryItem(this.props.id);
  }

  handleCheck() {
    this.props.toggleCheckGroceryItem(this.props.id);
  }

  render() {
    const { name, editMode, checked } = this.props;
    const { editInputValue } = this.state;
    return (
      <Li>
        <Div>
          <CheckBox checked={checked} onClick={this.handleCheck} />
          <NameField
            checked={checked}
            name={name}
            value={editInputValue}
            editMode={editMode}
            handleInputChange={this.handleInputChange}
            onPressEnter={this.onPressEnter}
          />
        </Div>
        <Div reverse>
          <Button type="delete" handleDelete={this.handleDeleteItem} editMode={editMode} />
          <Button type="edit" handleEdit={this.handleEdit} editMode={editMode} />
        </Div>
      </Li>
    );
  }
}
export default Item;
