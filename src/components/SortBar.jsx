import React from 'react';
import { dropdown } from 'react-bootstrap';

function SortBar(){
  return (
    <div>
      <h1>Sort By: </h1>
      <select>
        <option value="name">Name</option>
        <option value="type">Type</option>
        <option value="price">Price</option>
        <option value="abv">ABV</option>
      </select>
   </div>
  )
}

export default SortBar;
