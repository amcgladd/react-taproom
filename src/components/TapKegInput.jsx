import React from 'react';
import PropTypes from 'prop-types';

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
      price: parseInt(_price.value),
      abv: parseInt(_abv.value),
      remaining: parseInt(_remaining.value)
    });
    _name.value = '';
    _type.value = '';
    _price.value = '';
    _abv.value = '';
    _remaining.value = '';
  }

  return (
    <div className="tapKegStyle">
      <style jsx>{`
          .tapKegStyle {
            background-color: #C980A1;
          }
        `}</style>
      <h1>Tap New Keg</h1>
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
        <button type="submit">Tap Keg</button>
      </form>
    </div>
  );
}

TapKegInput.propTypes = {
  onTapKegSubmission: PropTypes.func
};

export default TapKegInput;
