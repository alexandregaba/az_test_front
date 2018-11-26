export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const START_EDIT_GROCERY_ITEM = 'START_EDIT_GROCERY_ITEM';
export const STOP_EDIT_GROCERY_ITEM = 'STOP_EDIT_GROCERY_ITEM';
export const DELETE_GROCERY_ITEM = 'DELETE_GROCERY_ITEM';
export const TOGGLE_CHECK_GROCERY_ITEM = 'TOGGLE_CHECK_GROCERY_ITEM';

export function addGroceryItem(item) {
  return { type: ADD_GROCERY_ITEM, item };
}

export function startEditGroceryItem(id) {
  return { type: START_EDIT_GROCERY_ITEM, itemID: id };
}

export function stopEditGroceryItem(item) {
  return { type: STOP_EDIT_GROCERY_ITEM, item };
}

export function deleteGroceryItem(id) {
  return { type: DELETE_GROCERY_ITEM, itemID: id };
}

export function toggleCheckGroceryItem(id) {
  return { type: TOGGLE_CHECK_GROCERY_ITEM, itemID: id };
}
