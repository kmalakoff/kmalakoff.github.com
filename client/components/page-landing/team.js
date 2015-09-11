import React from 'react';

class Team extends React.Component {
  render() {
    return (
      <div id="tf-team" className="text-center">
        <div className="overlay">
          <div className="container">
            <div className="section-title center">
              <h2><strong>Contact Me</strong></h2>
              <div className="line">
              <hr/>
              </div>
            </div>

            <div id="team" className="owl-carousel owl-theme row">
              <div className="item">
                <div className="thumbnail">
                  <img alt="..." className="img-circle team-img kevin"/>
                  <div className="caption">
                    <h3>Kevin Malakoff</h3>
                    <p>Startup Consultant</p>
                    <p>Laser-focussed, turbo-charged entrepreneur and coach.</p>
                    <br/>
                    <a href="mailto:kevin@effortlessmotion.com">Email Me</a>
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
