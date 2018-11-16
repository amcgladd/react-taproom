import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import PatronView from './PatronView';
import AdminView from './AdminView';
import Error404 from './Error404';

const masterKegList = [
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList
    };
  }


  render(){
    return (
      <div>
        <style jsx>{`
          div {
            background-color: #EDB749;
            font-family: 'Montserrat', sans-serif;;
          }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PatronView kegList={this.state.masterKegList}/>} />
          <Route path='/adminview' render={()=><AdminView kegList={this.state.masterKegList}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
