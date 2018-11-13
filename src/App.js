import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'

import './App.scss';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header" />
      </div>
    );
  }
}

export default App;
