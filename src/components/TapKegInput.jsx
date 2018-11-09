import React from 'react';
import AddButton from './AddButton';

function TapKegInput() {
  return (
    <div>
      <form>
        <div>
        <label>Name:
        <input type="text" /></label>
        </div>
        <div>
          <label>Type:
            <input type="text" /></label>
        </div>
        <div>
          <label>Price:
            <input type="text" /></label>
        </div>
        <div>
          <label>ABV:
          <input type="text" /></label>
        </div>
        <div>
          <label>Remaining:
          <input type="text" /></label>
        </div>
        <AddButton/>
      </form>
    </div>
  )
}

export default TapKegInput;
