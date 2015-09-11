import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div id="tf-home" className="text-center">
        <div className="overlay">
          <div className="content">
            <h1>Welcome on <strong><span className="color">Spirit8</span></strong></h1>
            <p className="lead">We are a digital agency with <strong>years of experience</strong> and with <strong>extraordinary people</strong></p>
            <a href="#tf-about" className="fa fa-angle-down page-scroll"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
