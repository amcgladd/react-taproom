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
      <p>Patron View Works!</p>
      <KegList/>
    </div>
  );
}

export default PatronView;
