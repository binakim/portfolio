import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'

import './App.scss';

import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header className="Header" />
        <Footer />
      </div>
    );
  }
}

export default App;
