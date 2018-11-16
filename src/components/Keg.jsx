import React from 'react';
import PropTypes from 'prop-types';
import EditButton from './EditButton';
import SellButton from './SellButton';
import DeleteButton from './DeleteButton';


function Keg(props){
  const adminKegDisplay =
    <div>
      <style jsx>{`
        div {
          max-width: 400px;
          background-color: #59D2FF;
        }
        `}</style>
      <h3>Name: {props.name}</h3>
      <h3>Type: {props.type}</h3>
      <h3>Price: {props.price}</h3>
      <h3>ABV: {props.abv}</h3>
      <h3>Remaining: {props.remaining}</h3>
      <EditButton />
      <SellButton />
      <DeleteButton
        id={props.id}
        onDeleteKegSubmission={props.onDeleteKegSubmission} />
      <hr/>
    </div>
    ;

  const patronKegDisplay =
    <div>
      <style jsx>{`
          div {
            max-width: 400px;
            background-color: #59D2FF;
          }
          `}</style>
      <h3>Name: {props.name}</h3>
      <h3>Type: {props.type}</h3>
      <h3>Price: {props.price}</h3>
      <h3>ABV: {props.abv}</h3>
      <h3>Remaining: {props.remaining}</h3>
      <hr/>
    </div>
      ;


  if(props.currentRouterPath === '/adminview'){
    return (
      <div>
        {adminKegDisplay}
      </div>
    );
  } else {
    return (
      <div>
        {patronKegDisplay}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number,
  remaining: PropTypes.number,
  key: PropTypes.string,
  currentRouterPath: PropTypes.string
};

export default Keg;
