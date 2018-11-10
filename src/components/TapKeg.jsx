import React from 'react';
import TapKegInput from './TapKegInput';


function TapKeg() {
  return(
    <div>
      <style jsx>{`
          div {
            background-color: #C980A1;
          }
        `}</style>
      <h1>Tap Keg</h1>
      <TapKegInput/>
    </div>
  );
}

export default TapKeg;
