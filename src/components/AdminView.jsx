import React from 'react';
import KegList from './KegList';
import TapKeg from './TapKeg';
import EditKeg from './EditKeg';

function AdminView(){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: lightBlue;
          }
        `}</style>
      <KegList/>
      <TapKeg/>
      <EditKeg/>
      <hr/>
    </div>
  );
}

export default AdminView;
