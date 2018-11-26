import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import uuid from 'uuid/v4';
import Item from './Item/Item';
import styled from 'styled-components';

import CustomSelect from './CustomSelect/CustomSelect';

const SelectGroup = styled.div`
  width: 90%;
  height: 30px;
  margin: auto;
  display: flex;
  margin-top: 5px;
`;
class App extends Component {
  constructor(props) {
    super(props);

    const filterOptions = [
      { value: '', display: 'All', isDefault: true },
      { value: 'checked', display: 'Checked Only' },
      { value: 'notChecked', display: 'Not checked Only' },
    ];

    const defaultSelected = filterOptions.filter(option => option.isDefault === true)[0];

    this.state = {
      filterOptions,
      isSelectOpened: false,
      selected: defaultSelected,
      filter: defaultSelected.value,
    };
  }
  static propTypes = {
    groceries: PropTypes.instanceOf(Immutable.List),
  };

  static defaultProps = {
    groceries: new Immutable.List([]),
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.addGroceryItem({ checked: false, name: event.target.value, id: uuid() });
      event.target.value = '';
    }
  };

  selectMe = event => {
    const selectedOption = this.state.filterOptions.filter(
      option => option.display === event.target.innerText,
    )[0];
    this.setState({
      selected: selectedOption,
      isSelectOpened: !this.state.isSelectOpened,
      filter: selectedOption.value,
    });
  };

  toggleSelectOpen = () => {
    this.setState({
      isSelectOpened: !this.state.isSelectOpened,
    });
  };

  applyFilters = item => {
    switch (this.state.filter) {
      case 'checked':
        return item.checked === true;
      case 'notChecked':
        return item.checked === false;
      default:
        return true;
    }
  };

  render() {
    const {
      groceries,
      startEditGroceryItem,
      stopEditGroceryItem,
      deleteGroceryItem,
      toggleCheckGroceryItem,
    } = this.props;

    return (
      <div className="app">
        <h1>My groceries :</h1>
        <input
          className="add-item"
          type="text"
          onKeyPress={this.onKeyPress}
          placeholder="Add an item..."
        />
        <SelectGroup>
          <label htmlFor={'filter'}>Filter:</label>
          <CustomSelect
            options={this.state.filterOptions}
            name="filter"
            selectMe={this.selectMe}
            toggleSelectOpen={this.toggleSelectOpen}
            isOpened={this.state.isSelectOpened}
            selected={this.state.selected}
          />
        </SelectGroup>
        <ul>
          {groceries.filter(this.applyFilters).map((item, index) => (
            <Item
              key={index}
              {...item}
              startEditGroceryItem={startEditGroceryItem}
              stopEditGroceryItem={stopEditGroceryItem}
              deleteGroceryItem={deleteGroceryItem}
              toggleCheckGroceryItem={toggleCheckGroceryItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
