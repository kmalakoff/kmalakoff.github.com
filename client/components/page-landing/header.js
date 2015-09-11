import React from 'react';
import {toggle} from 'react-state-utils';

import $ from 'jquery';
import 'bootstrap/js/scrollspy';

import scrollTo from '../../lib/scroll-to';

const LINKS = [
  {href: '#home', title: 'Home'},
  {href: '#about', title: 'About'},
  {href: '#team', title: 'Contact'},
  // {href: '#services', title: 'Services'},
  // {href: '#clients', title: 'Clients'},
  // {href: '#testimonials', title: 'Testimonials'},
  // {href: '#contact', title: 'Contact'}
];

class Header extends React.Component {
  componentDidMount() {
    $('body').scrollspy({target: '.menu', offset: 80})
  }
  state = {open: false};

  render() {
    return (
      <nav className="menu navbar navbar-default navbar-fixed-top on">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={e=>toggle(this, 'open')}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href=".home" onClick={scrollTo}>Effortless Motion</a>
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
