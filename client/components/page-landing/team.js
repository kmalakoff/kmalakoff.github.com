import React from 'react';

import imageKevin from '../../img/kevin.jpg';

class Team extends React.Component {
  render() {
    return (
      <div id="team" className="ui vertical stripe center aligned segment team">
        <div className="ui text container darken">
          <h3 className="ui header">Contact us</h3>
          <img src={imageKevin} className="ui medium avatar image"/>
          <h4>Kevin Malakoff</h4>
          <p>Startup Consultant</p>
          <p>Laser-focussed, turbo-charged entrepreneur and coach.</p>
          <i className="circular mail icon"></i>
          <i className="circular linkedin icon"></i>
          <i className="circular github icon"></i>
          <i className="circular twitter icon"></i>
        </div>
      </div>
    );
  }
}

export default Team;
