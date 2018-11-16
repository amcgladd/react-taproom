import React from 'react';
import Keg from './Keg';
import SortBar from './SortBar';
import PropTypes from 'prop-types';

function KegList({ kegList }){

  return (
    <div>
      <style jsx>{`
        div {
          width: 300px;
          background-color: #A3E6C8;
        }
        `}</style>
      <h1>Keg List</h1>
      <SortBar/>
      {kegList.map((keg, index) =>
        <Keg name={keg.name}
          type={keg.type}
          price={keg.price}
          abv={keg.abv}
          remaining={keg.remaining}
          key={index}
        />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  remaining: PropTypes.number
};

export default KegList;
