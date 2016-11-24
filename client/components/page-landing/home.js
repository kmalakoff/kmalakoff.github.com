import React from 'react';

import scrollTo from '../../lib/scroll-to';

const LINKS = [
  {href: '#home', title: 'Home'},
  {href: '#about', title: 'About'},
  {href: '#team', title: 'Contact'},
];

class Home extends React.Component {
  render() {
    return (
      <div id="home" className="ui vertical center aligned segment masthead">
        <div className="ui container">
          <div className="ui large secondary pointing menu">
            <a className="toc item">
              <i className="sidebar icon"></i>
            </a>
            <div className="right item">
              {LINKS.map(x => <a key={x.href} className="item" href={x.href} onClick={scrollTo}>{x.title}</a>)}
            </div>
          </div>
        </div>

        <div className="ui text container">
          <h1 className="ui inverted header">Effortless Motion</h1>
          <h2>YOU CAN REACH A STATE OF EFFORTLESS MOTION</h2>
          <h3>I am a startup consultant who can help you achieve your business goals</h3>
        </div>
      </div>
    );
  }
}

export default Home;
