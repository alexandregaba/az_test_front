import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleStartEdit = this.handleStartEdit.bind(this);
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
    startEditGroceryItem: () => {},
    checked: false,
    editMode: false,
  };

  handleStartEdit() {
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
    if (editMode) {
      return (
        <li>
          <input id="itemCheck" type="checkbox" checked={checked} onChange={this.handleCheck} />
          <input value={editInputValue} onChange={this.handleInputChange} />
          <button id="editButton" onClick={this.handleStartEdit}>
            Save
          </button>
          <button id="deleteButton" onClick={this.handleDeleteItem}>
            Delete
          </button>
        </li>
      );
    }
    return (
      <li>
        <input id="itemCheck" type="checkbox" checked={checked} onChange={this.handleCheck} />
        {name}
        <button id="editButton" onClick={this.handleStartEdit}>
          {editMode ? 'Save' : 'Edit'}
        </button>
        <button id="deleteButton" onClick={this.handleDeleteItem}>
          Delete
        </button>
      </li>
    );
  }
}
export default Item;
