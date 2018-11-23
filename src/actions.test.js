import {
  addGroceryItem,
  ADD_GROCERY_ITEM,
  startEditGroceryItem,
  START_EDIT_GROCERY_ITEM,
  stopEditGroceryItem,
  STOP_EDIT_GROCERY_ITEM,
  deleteGroceryItem,
  DELETE_GROCERY_ITEM,
} from './actions';

describe('test actions', () => {
  it('triggers add item action', () => {
    const item = 'test';
    expect(addGroceryItem(item)).toEqual({ item: 'test', type: ADD_GROCERY_ITEM });
  });

  it('triggers START_EDIT_GROCERY_ITEM action', () => {
    const id = '1';
    expect(startEditGroceryItem(id)).toEqual({ itemID: '1', type: START_EDIT_GROCERY_ITEM });
  });

  it('triggers STOP_EDIT_GROCERY_ITEM action', () => {
    const item = 'test';
    expect(stopEditGroceryItem(item)).toEqual({ item: 'test', type: STOP_EDIT_GROCERY_ITEM });
  });

  it('triggers DELETE_GROCERY_ITEM action', () => {
    const id = '1';
    expect(deleteGroceryItem(id)).toEqual({ itemID: '1', type: DELETE_GROCERY_ITEM });
  });
});
