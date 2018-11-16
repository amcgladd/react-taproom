import React from 'react';
import KegList from './KegList';
import PropTypes from 'prop-types';

function PatronView({ kegList }) {
  return (
    <div>
      <style jsx>{`
          div {
            background-color: lightGreen;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      <KegList kegList={kegList}/>
    </div>
  );
}

export default PatronView;
