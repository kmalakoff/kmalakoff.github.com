import React from 'react';

import scrollTo from '../../lib/scroll-to';

class Home extends React.Component {
  render() {
    return (
      <div id="tf-home" className="text-center">
        <div className="overlay">
          <div className="content">
            <h1>Welcome to <strong><span className="color">Effortless Motion</span></strong></h1>
            <p className="lead">We are a startup consultancy with <strong>years of experience</strong> and with <strong>extraordinary people</strong></p>
            <a href="#tf-about" className="fa fa-angle-down page-scroll" onClick={scrollTo}></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
