import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


const workPage = () => <div>Hello <span className='highlight'>Work</span></div>
const aboutPage = () => <h2>About</h2>

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav flex-grow-1 justify-content-end">
                <li className="nav-item">
                  <NavLink exact={true} to="/" activeClass="active">WORK</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" activeClass="active">ABOUT</NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={workPage} />
          <Route path="/about" component={aboutPage} />
        </div>
      </Router>
    );
  }
}

export default Header;
