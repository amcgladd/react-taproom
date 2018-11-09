import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <div>
      <h3>{props.name}</h3>
        <h3>{props.type}</h3>
        <h3>{props.price}</h3>
        <h3>{props.abv}</h3>
        <h3>{props.remaining}</h3>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number,
  remaining: PropTypes.number
};

export default Keg;
