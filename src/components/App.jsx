import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import PatronView from './PatronView';
import AdminView from './AdminView';


class App extends React.Component {
  constructor() {}

  render() {}
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
        <Route exact path='/' component={PatronView} />
        <Route path='/adminview' component={AdminView} />
      </Switch>

    </div>
  );
}

export default App;
