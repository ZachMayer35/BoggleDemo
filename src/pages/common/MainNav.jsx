import React from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';

const navItemClass = (path, currentPath) => {
    let name = '';
    if (currentPath === path) {
        name += 'active';
    }
    return name;
};

const MainNav = ({ currentPath }) => (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="nav navbar-nav">
            <li className={navItemClass('/', currentPath)}>
              <Link  to='/'>
                Play Boggle
              </Link>
            </li>
            <li className={navItemClass('/About', currentPath)} >
              <Link to='/About'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
);

export default MainNav;
