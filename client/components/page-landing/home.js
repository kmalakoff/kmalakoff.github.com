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
        <div className="fill darken">
          <div className="ui text container">
            <h1 className="ui inverted header">Effortless Motion</h1>
            <h2>You can reach a state of effortless motion</h2>
            <h3>I am a startup consultant who can help you achieve your business goals</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
