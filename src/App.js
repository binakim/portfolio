import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';

import Header from './Header';
import Footer from './Footer';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';
import ProjectAPage from './ProjectAPage';
import ProjectBPage from './ProjectBPage';
import ProjectCPage from './ProjectCPage';
import ProjectDPage from './ProjectDPage';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App container-fluid">
          <Header className="Header" />
          <Route path='/' exact component={WorkPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/project-a' component={ProjectAPage} />
          <Route path='/project-b' component={ProjectBPage} />
          <Route path='/project-c' component={ProjectCPage} />
          <Route path='/project-d' component={ProjectDPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
