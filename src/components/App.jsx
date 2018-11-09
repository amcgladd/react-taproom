import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import PatronView from './PatronView';
import AdminView from './AdminView';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={PatronView} />
        <Route path='/adminview' component={AdminView} />
      </Switch>

    </div>
  );
}

export default App;
