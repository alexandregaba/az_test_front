import { addGroceryItem } from './actions';

describe('test actions', () => {
  it('addGrocery triggers action', () => {
    const item = 'test';
    expect(addGroceryItem(item)).toEqual({ item: 'test', type: 'ADD_GROCERY_ITEM' });
  });
});
