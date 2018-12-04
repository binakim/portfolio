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
import TopButton from './TopButton';
import TopDetector from './TopDetector';

class App extends Component {
  constructor(props) {
    super(props);
    this.dispatch = this.dispatch.bind(this);
    this.state = { showTopButton: false };
    this.parallaxRef = React.createRef();
  }

  dispatch(state) {
    this.setState(state);
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <TopButton target={this.parallaxRef} showTopButton={this.state.showTopButton} />
          <div ref={this.parallaxRef} className='parallax-container'>
            <div className="App container-fluid">
              <Header className="Header" />
              <TopDetector dispatch={this.dispatch} />
              <Route path='/' exact component={WorkPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/project-a' component={ProjectAPage} />
              <Route path='/project-b' component={ProjectBPage} />
              <Route path='/project-c' component={ProjectCPage} />
              <Route path='/project-d' component={ProjectDPage} />
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
