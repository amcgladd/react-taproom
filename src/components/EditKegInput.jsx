import React from 'react';
import DoneButton from './DoneButton';

function EditKegInput() {
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
        <DoneButton/>
      </form>
    </div>
  );
}

export default EditKegInput;
