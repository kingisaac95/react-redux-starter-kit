import React, { Component } from 'react';
import NavBar from '../../common/NavBar.jsx';
import Footer from '../../common/Footer.jsx';

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <h3>Contact us page.</h3>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
