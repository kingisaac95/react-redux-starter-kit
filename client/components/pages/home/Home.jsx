import React, { Component } from 'react';
import NavBar from '../../common/NavBar.jsx';
import Footer from '../../common/Footer.jsx';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <h3>Hello World!! You're home.</h3>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
