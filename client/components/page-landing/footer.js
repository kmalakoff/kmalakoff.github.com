import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <nav id="footer">
        <div className="container">
          <div className="pull-left fnav">
            <p>ALL RIGHTS RESERVED. COPYRIGHT © 2015. EFFORTLESS MOTION</p>
          </div>
          <div className="pull-right fnav">
            <ul className="footer-social">
              <li><a href="https://www.linkedin.com/in/kevinmalakoff"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/kmalakoff"><i className="fa fa-github"></i></a></li>
              <li><a href="https://twitter.com/kmalakoff"><i className="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer;
