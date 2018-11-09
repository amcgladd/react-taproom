import React from 'react';

function SortBar(){
  return (
    <div>
      <h3>Sort By: </h3>
      <select>
        <option value="name">Name</option>
        <option value="type">Type</option>
        <option value="price">Price</option>
        <option value="abv">ABV</option>
      </select>
    </div>
  );
}

export default SortBar;
