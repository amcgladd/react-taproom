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
          <label>Type:</label>
            <select id='type' ref={(select) => {_type = select;}}>
               <option value="Ale">Ale</option>
               <option value="Lager">Lager</option>
               <option value="Stout">Stout</option>
               <option value="Other">Other</option>
             </select>
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
