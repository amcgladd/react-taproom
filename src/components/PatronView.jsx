import React from 'react';
import KegList from './KegList';

function PatronView() {
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
      <KegList/>
    </div>
  );
}

export default PatronView;
