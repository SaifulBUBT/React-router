import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

 import User from './components/User';
  import Home from './components/Home';
  import About from './components/About';
 import Contact from './components/Contact';
 import Error from './components/Error'

import Navigation from './components/Navigation';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about'  component={About} />
            <Route path='/user'  component={User} />
            <Route path='/contact'  component={Contact} />
            <Route component={Error} />
            </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
