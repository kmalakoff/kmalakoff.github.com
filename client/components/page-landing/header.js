import React from 'react';

import $ from 'jquery';

import scrollTo from '../../lib/scroll-to';

const LINKS = [
  {href: '#home', title: 'Home'},
  {href: '#about', title: 'About'},
  {href: '#team', title: 'Contact'},
];

class Header extends React.Component {
  componentDidMount() {
    $('body').scrollspy({target: '.menu', offset: 80})
  }
  state = {open: false};

  render() {
    return (
      <div className="ui large top fixed menu">
        <div className="ui container">
          <div className="item">Effortless Motion</div>
          <div className="right menu">
            {LINKS.map(x => <a key={x.href} className="item" href={x.href} onClick={scrollTo}>{x.title}</a>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
