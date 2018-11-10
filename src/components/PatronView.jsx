import React from 'react';
import KegList from './KegList';

function PatronView() {
  return (
    <div>
      <style jsx>{`
          div {
            background-color: lightGreen;
          }
        `}</style>
      <KegList/>
    </div>
  );
}

export default PatronView;
