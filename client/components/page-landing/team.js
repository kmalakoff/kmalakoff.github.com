import React from 'react';

class Team extends React.Component {
  render() {
    return (
      <div id="team" className="team text-center">
        <div className="overlay">
          <div className="container">
            <div className="section-title center">
              <h2><strong>Contact Me</strong></h2>
              <div className="line">
              <hr/>
              </div>
            </div>

            <div className="owl-carousel owl-theme row">
              <div className="item">
                <div className="thumbnail">
                  <img alt="..." className="img-circle team-img kevin"/>
                  <div className="caption">
                    <h3>Kevin Malakoff</h3>
                    <p>Startup Consultant</p>
                    <p>Laser-focussed, turbo-charged entrepreneur and coach.</p>
                    <br/>
                    <div className="footer fnav">
                      <ul className="footer-social">
                        <li><a href="mailto:kevin@effortlessmotion.com"><i className="fa fa-envelope"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/kevinmalakoff"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/kmalakoff"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://twitter.com/kmalakoff"><i className="fa fa-twitter"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
