import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Browse from './screens/Browse.jsx';
import MyLibrary from './screens/MyLibrary.jsx';
import Search from './screens/Search.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Switch>
          <Route path='/' exact component={Browse} />
          <Route path='/search' component={Search} />
          <Route path='/lib' component={MyLibrary} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
