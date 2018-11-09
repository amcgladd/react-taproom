import React from 'react';
import Keg from './Keg';
import SortBar from './SortBar';

var masterKegList = [

  {
    name: 'Ruby Zozzle',
    type: 'Ale',
    abv: 6.8,
    price: 7,
    remaining: 20
  },
  {
    name: 'Tart N Juicy',
    type: 'Ale',
    abv: 4.5,
    price: 6,
    remaining: 60
  },
  {
    name: 'Hamm\'s',
    type: 'Stout',
    abv: 4.7,
    price: 3,
    remaining: 65
  },
  {
    name: 'Prismatic',
    type: 'IPA',
    abv:  5.9,
    price: 6,
    remaining: 75
  },
  {
    name: 'Juicy Haze',
    type: 'IPA',
    abv:  7.5,
    price: 6,
    remaining: 18
  },
  {
    name: '8 Hop',
    type: 'Ale',
    abv:  5.5,
    price: 6,
    remaining: 58
  }
];



function KegList(){
  return (
    <div>
      <h1>Keg List</h1>
      <SortBar/>
      {masterKegList.map((keg, index) =>
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

export default KegList;
