import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: lightBlue;
          }
        `}</style>
      <h3>Name: {props.name}</h3>
        <h3>Type: {props.type}</h3>
        <h3>Price: {props.price}</h3>
        <h3>ABV: {props.abv}</h3>
        <h3>Remaining: {props.remaining}</h3>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // abv: PropTypes.number,
  // remaining: PropTypes.number
};

export default Keg;
