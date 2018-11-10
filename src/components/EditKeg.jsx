import React from 'react';
import EditKegInput from './EditKegInput';

function EditKeg() {
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #E77C7C;
          }
        `}</style>
      <h1>Edit a Keg</h1>
      <EditKegInput/>
    </div>
  );
}

export default EditKeg;
