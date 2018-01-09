import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Page404 extends Component {
  render() {
    return (
      <div className="full-page text-center">
        <div className="page-404-wrapper">
          <Link to="/">
            <img src={require('../../assets/img/404.png')} alt="page_not_found"/>
          </Link>
        </div>
        <div className="row">
          <div
            className={
              `col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 page-404`
            }
          >
            <div className="img-404-wrapper">
              <img src={require('../../assets/images/404.png')} alt="logo"/>
            </div>
            <div className="space-20" />
            <h2 className="title-404">Did you miss your way?</h2>
            <div className="space-10" />
            <h4>The page you're looking for could not be found. Go home by
              <Link className="link-404" to="/"> clicking here</Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;
