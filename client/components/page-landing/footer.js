import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <nav id="footer">
        <div className="container">
          <div className="pull-left fnav">
            <p>ALL RIGHTS RESERVED. COPYRIGHT © 2014. Designed by <a href="https://dribbble.com/shots/1817781--FREEBIE-Spirit8-Digital-agency-one-page-template">Robert Berki</a> and Coded by <a href="https://dribbble.com/jennpereira">Jenn Pereira</a></p>
          </div>
          <div className="pull-right fnav">
            <ul className="footer-social">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer;
