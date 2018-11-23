import { groceries } from './reducers';
import Immutable from 'immutable';

describe('test reducers', () => {
  it('returns default State', () => {
    const action = { item: 'test', type: 'test' };
    const state = undefined;
    const result = new Immutable.List([
      { checked: false, name: 'Apples' },
      { checked: false, name: 'Bananas' },
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
    const action = { item: 'test', type: 'ADD_GROCERY_ITEM' };
    const state = undefined;
    const result = new Immutable.List([
      { checked: false, name: 'Apples' },
      { checked: false, name: 'Bananas' },
      'test',
    ]);
    expect(groceries(state, action)).toEqual(result);
  });
});
