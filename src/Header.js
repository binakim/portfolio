import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
          <a className="navbar-brand" href="#">
            <img src="assets/logo_black.png" data-rjs="2" width="30" alt="" />
          </a>
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
      </div>
    );
  }
}

export default Header;
