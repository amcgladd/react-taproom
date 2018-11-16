import React from 'react';
import AddButton from './AddButton';

function TapKegInput(props) {

  let _name = null;
  let _type = null;
  let _price = null;
  let _abv = null;
  let _remaining = null;

  function handleTapKegSubmission(event) {
    event.preventDefault();
    props.onTapKegSubmission({
      name: _name.value,
      type: _type.value,
      _price: _price.value,
      _abv: _abv.value,
      _remaining: _remaining.value
    });
    _name.value = '';
    _type.value = '';
    _price.value = '';
    _abv.value = '';
    _remaining.value = '';
  }

  return (
    <div>
      <form onSubmit={handleTapKegSubmission}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            id='name'
            ref={(input) => {_name = input;}}/>
        </div>
        <div>
          <label>Type:</label>
          <input
            type='text'
            id='type'
            ref={(input) => {_type = input;}}/>
        </div>
        <div>
          <label>Price:</label>
          <input type='number'
            id='price'
            ref={(input) => {_price = input;}}/>
        </div>
        <div>
          <label>ABV:</label>
          <input type='number'
            id='abv'
            ref={(input) => {_abv = input;}}/>
        </div>
        <div>
          <label>Remaining:</label>
          <input type='number'
            id='remaining'
            ref={(input) => {_remaining = input;}}/>
        </div>
        <AddButton/>
      </form>
    </div>
  );
}

export default TapKegInput;
