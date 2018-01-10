import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <Link to="/" className="navbar-brand navbrand-wrapper">React Redux Starter Kit</Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><IndexLink activeClassName="nav-item-active" to="/">Home</IndexLink></li>
              <li><Link activeClassName="nav-item-active" to="/about-us">About Us</Link></li>
              <li><Link activeClassName="nav-item-active" to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
