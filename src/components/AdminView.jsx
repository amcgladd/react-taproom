import React from 'react';
import KegList from './KegList';
import EditKeg from './EditKeg';
import PropTypes from  'prop-types';
import TapKegInput from './TapKegInput';

function AdminView(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: #9BB5F0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
        } .stack-vertical {
          display: flex;
          flex-direction: column;
        }
        `}</style>
      <div>
        <KegList kegList={props.kegList} currentRouterPath={props.currentRouterPath}/>
      </div>
      <div className="stack-vertical">
        <TapKegInput onTapKegSubmission={props.onTapKegSubmission}/>
        <EditKeg/>
      </div>
    </div>
  );
}

AdminView.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default AdminView;
