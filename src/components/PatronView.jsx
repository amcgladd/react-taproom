import React from 'react';
import KegList from './KegList';
import PropTypes from 'prop-types';

function PatronView(props) {
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
      <KegList kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        />
    </div>
  );
}

PatronView.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default PatronView;
