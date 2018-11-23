import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleStartEdit = this.handleStartEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { editInputValue: this.props.name };
  }

  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    startEditGroceryItem: PropTypes.func,
    checked: PropTypes.bool,
    editMode: PropTypes.bool,
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

  render() {
    const { name, editMode } = this.props;
    const { editInputValue } = this.state;
    if (editMode) {
      return (
        <li>
          <input value={editInputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleStartEdit}>Save</button>
        </li>
      );
    }
    return (
      <li>
        {name}
        <button onClick={this.handleStartEdit}>{editMode ? 'Save' : 'Edit'}</button>
      </li>
    );
  }
}
export default Item;
