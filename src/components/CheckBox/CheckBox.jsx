import React from 'react';

const CheckBox = ({ checked, handleCheck }) => (
  <input className="checkbox" type="checkbox" checked={checked} onChange={handleCheck} />
);

export default CheckBox;
