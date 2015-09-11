import React from 'react';

import scrollTo from '../../lib/scroll-to';

class Home extends React.Component {
  render() {
    return (
      <div id="tf-home" className="text-center">
        <div className="overlay">
          <div className="content">
            <h1>You can reach a state of <strong><span className="color">Effortless Motion</span></strong></h1>
            <p className="lead">I am a <strong>startup consultant</strong> who can help you <strong>achieve your business goals</strong></p>
            <a href="#tf-about" className="fa fa-angle-down page-scroll" onClick={scrollTo}></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
