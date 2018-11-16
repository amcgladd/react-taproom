import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import PatronView from './PatronView';
import AdminView from './AdminView';
import Error404 from './Error404';



class App extends React.Component {
  
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
        <Route exact path='/' component={PatronView} />
        <Route path='/adminview' component={AdminView} />
        <Route component={Error404} />
      </Switch>

    </div>
  );
}
}

export default App;
