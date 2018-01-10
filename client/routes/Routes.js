import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import Home from '../components/pages/home/Home.jsx';
import About from '../components/pages/about/About.jsx';
import Contact from '../components/pages/contact/Contact.jsx';
import Page404 from '../components/common/Page404.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about-us" component={About} />
    <Route path="contact-us" component={Contact} />
    <Route path="*" component={Page404}/>
  </Route>
);
