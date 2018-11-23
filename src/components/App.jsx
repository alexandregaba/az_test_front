import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import uuid from 'uuid/v4';
import Item from './Item/Item';

class App extends Component {
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

  render() {
    const { groceries, startEditGroceryItem, stopEditGroceryItem } = this.props;

    return (
      <div className="app">
        <h1>My groceries :</h1>
        <input type="text" onKeyPress={this.onKeyPress} placeholder="Add an item..." />
        <ul>
          {groceries.map((item, index) => (
            <Item
              key={index}
              {...item}
              editMode={item.editMode}
              startEditGroceryItem={startEditGroceryItem}
              stopEditGroceryItem={stopEditGroceryItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
