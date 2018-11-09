import React from 'react';
import KegList from './KegList';
import Keg from './Keg';
import SortBar from './SortBar';

function PatronView() {
  return (
    <div>
      <style jsx>{`
          div {
            background-color: lightBlue;
          }
        `}</style>
      <p>Patron View Works!</p>
      <KegList/>
    </div>
  );
}

export default PatronView;
