import React from 'react';
import {toggle} from 'react-state-utils';

import $ from 'jquery';
import 'bootstrap/js/scrollspy';

import scrollTo from '../../lib/scroll-to';

const LINKS = [
  {href: '#tf-home', title: 'Home'},
  {href: '#tf-about', title: 'About'},
  {href: '#tf-team', title: 'Team'},
  {href: '#tf-services', title: 'Services'},
  // {href: '#tf-clients', title: 'Clients'},
  // {href: '#tf-testimonials', title: 'Testimonials'},
  {href: '#tf-contact', title: 'Contact'}
];

class Header extends React.Component {
  componentDidMount() {
    $('body').scrollspy({target: '#tf-menu', offset: 80})
  }
  state = {open: false};

  render() {
    return (
      <nav id="tf-menu" className="navbar navbar-default navbar-fixed-top on">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={e=>toggle(this, 'open')}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#tf-home" onClick={scrollTo}>Effortless Motion</a>
          </div>

          <div className={`navbar-collapse collapse ${this.state.open ? 'in' : ''}`}>
            <ul className="nav navbar-nav navbar-right">
              {LINKS.map(x => <li key={x.href}><a href={x.href} onClick={scrollTo}>{x.title}</a></li>)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
