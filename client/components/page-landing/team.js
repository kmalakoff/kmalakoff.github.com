import React from 'react';

class Team extends React.Component {
  render() {
    return (
      <div id="tf-team" className="text-center">
        <div className="overlay">
          <div className="container">
            <div className="section-title center">
              <h2>Meet <strong>our team</strong></h2>
              <div className="line">
                <hr/>
              </div>
            </div>

            <div id="team" className="owl-carousel owl-theme row">
              <div className="item">
                <div className="thumbnail">
                  <img src="img/team/01.jpg" alt="..." className="img-circle team-img"/>
                  <div className="caption">
                    <h3>Jenn Gwapa</h3>
                    <p>CEO / Founder</p>
                    <p>Do not seek to change what has come before. Seek to create that which has not.</p>
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
