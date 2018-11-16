import React from 'react';
import PropTypes from 'prop-types';

function DeleteButton(props) {
  return (
    <div>
      <button onClick={() => {props.onDeleteKegSubmission(props.key);}}>Delete</button>
    </div>
  );
}

DeleteButton.propTypes = {
  onDeleteKegSubmission: PropTypes.func
};

export default DeleteButton;
