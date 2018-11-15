import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.scss';

import Header from './Header';
import Footer from './Footer';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';

class App extends Component {
  render() {
    return (
      <Router basename="/bina">
        <div className="App container-fluid">
          <Header className="Header" />
          <Route path='/' exact component={WorkPage} />
          <Route path='/about' component={AboutPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
