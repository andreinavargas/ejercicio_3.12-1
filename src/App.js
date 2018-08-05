import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pricing from './Pricing';
import About from './About';
import Home from './Home';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Enlaces </h2>
        <header>
          <nav>
            <ul>
              <li> <Link to='/'> Home </Link> </li>
              <li> <Link to='/about'> About </Link> </li>
              <li> <Link to='/Pricing'> Pricing </Link> </li>
            </ul>
          </nav>
        </header>
      <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/pricing' component={ Pricing } />
      </Switch>

      </div>
    );
  }
}

export default App;
