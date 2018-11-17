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
    remaining: 20,
    id: 1
  },
  {
    name: 'Tart N Juicy',
    type: 'Ale',
    abv: 4.5,
    price: 6,
    remaining: 60,
    id: 2
  },
  {
    name: 'Hamm\'s',
    type: 'Stout',
    abv: 4.7,
    price: 3,
    remaining: 65,
    id: 3
  },
  {
    name: 'Prismatic',
    type: 'Stout',
    abv:  5.9,
    price: 6,
    remaining: 75,
    id: 4
  },
  {
    name: 'Juicy Haze',
    type: 'Ale',
    abv:  7.5,
    price: 6,
    remaining: 18,
    id: 5
  },
  {
    name: '8 Hop',
    type: 'Ale',
    abv:  5.5,
    price: 6,
    remaining: 58,
    id: 6
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList
    };
    this.handleTapKegSubmission = this.handleTapKegSubmission.bind(this);
    this.handleDeleteKegSubmission = this.handleDeleteKegSubmission.bind(this);
  }

  handleTapKegSubmission(newKeg){
    let newMasterKegList = this.state.masterKegList.slice();
    console.log(masterKegList);
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  handleDeleteKegSubmission(id){
    let newMasterKegList = this.state.masterKegList.slice();
    for ( var i = 0; i < newMasterKegList.length; i++) {
      if ( newMasterKegList[i].id === id){
        newMasterKegList.splice(i,1);
      }
    }
    this.setState({masterKegList: newMasterKegList});
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
          <Route exact path='/'
            render={(props)=><PatronView
            kegList={this.state.masterKegList}
            currentRouterPath={props.location.pathname}/>} />
          <Route
            path='/adminview'
            render={(props)=><AdminView   kegList={this.state.masterKegList}        currentRouterPath={props.location.pathname}
            onTapKegSubmission={this.handleTapKegSubmission}
            onDeleteKegSubmission={this.handleDeleteKegSubmission}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
