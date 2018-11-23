import { groceries } from './reducers';
import Immutable from 'immutable';

describe('test reducers', () => {
  it('returns default State', () => {
    const action = { item: 'test', type: 'test' };
    const state = undefined;
    const result = new Immutable.List([
      { checked: false, name: 'Apples', id: 1, editMode: false },
      { checked: false, name: 'Bananas', id: 2, editMode: false },
    ]);
    expect(groceries(state, action)).toEqual(result);
  });

  it('returns injected State', () => {
    const action = { item: 'test', type: 'test' };
    const state = new Immutable.List([
      { checked: false, name: 'Apples' },
      { checked: false, name: 'Bananas' },
      { checked: false, name: 'Pears' },
      { checked: false, name: 'Orange' },
    ]);
    const result = new Immutable.List([
      { checked: false, name: 'Apples' },
      { checked: false, name: 'Bananas' },
      { checked: false, name: 'Pears' },
      { checked: false, name: 'Orange' },
    ]);
    expect(groceries(state, action)).toEqual(result);
  });

  it('returns Intial State plus the item from action', () => {
    const action = { item: { checked: false, name: 'Oranges' }, type: 'ADD_GROCERY_ITEM' };
    const state = undefined;
    const result = new Immutable.List([
      { checked: false, name: 'Apples', id: 1, editMode: false },
      { checked: false, name: 'Bananas', id: 2, editMode: false },
      { checked: false, name: 'Oranges' },
    ]);
    expect(groceries(state, action)).toEqual(result);
  });

  it('returns item in editMode', () => {
    const action = { item: { id: 1 }, type: 'START_EDIT_GROCERY_ITEM' };
    const state = undefined;
    const result = new Immutable.List([
      { checked: false, name: 'Apples', id: 1, editMode: true },
      { checked: false, name: 'Bananas', id: 2, editMode: false },
    ]);
    expect(groceries(state, action)).toEqual(result);
  });

  it('returns unchanged state if id is not found', () => {
    const action = { item: { id: 3 }, type: 'START_EDIT_GROCERY_ITEM' };
    const state = undefined;
    const result = new Immutable.List([
      { checked: false, name: 'Apples', id: 1, editMode: false },
      { checked: false, name: 'Bananas', id: 2, editMode: false },
    ]);
    expect(groceries(state, action)).toEqual(result);
  });
});
