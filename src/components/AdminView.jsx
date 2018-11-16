import React from 'react';
import KegList from './KegList';
import TapKeg from './TapKeg';
import EditKeg from './EditKeg';

function AdminView(){
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
        <KegList/>
      </div>
      <div className="stack-vertical">
        <TapKeg/>
        <EditKeg/>
      </div>
    </div>
  );
}

export default AdminView;
