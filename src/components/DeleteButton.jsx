import React from 'react';
import PropTypes from 'prop-types';

function DeleteButton(props) {

  return (
    <div>
      <button
        onClick={() =>{props.onDeleteKegSubmission(props.id);}}
      >Delete</button>
    </div>
  );
}

DeleteButton.propTypes = {
  onDeleteKegSubmission: PropTypes.func,
  key: PropTypes.string
};

export default DeleteButton;
