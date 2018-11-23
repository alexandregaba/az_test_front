export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const START_EDIT_GROCERY_ITEM = 'START_EDIT_GROCERY_ITEM';
export const STOP_EDIT_GROCERY_ITEM = 'STOP_EDIT_GROCERY_ITEM';

export function addGroceryItem(item) {
  return { type: ADD_GROCERY_ITEM, item };
}

export function startEditGroceryItem(item) {
  return { type: START_EDIT_GROCERY_ITEM, item };
}

export function stopEditGroceryItem(item) {
  return { type: STOP_EDIT_GROCERY_ITEM, item };
}
