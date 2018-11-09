import React from 'react';
import Header from './Header';
import KegList from './KegList';


function App(){
  return (
    <div>
      <style jsx>{`
          div {
            font-family: 'Montserrat', sans-serif;;
          }
        `}</style>
      <Header/>
      <KegList/>
    </div>
  );
}

export default App;
