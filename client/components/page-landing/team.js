import React from 'react';
// import {Element} from 'react-scroll'; 

import imageKevin from '../../img/kevin.jpg';

export default class Team extends React.Component {
  render() {
    return (
      <div name="team" className="ui vertical center aligned parallax segment team">
        <div className="fill darken">
          <div className="ui text container">
            <h2 className="ui inverted header">Contact us</h2>
            <img src={imageKevin} className="ui medium avatar image"/>
            <h4>Kevin Malakoff</h4>
            <p>Startup Consultant</p>
            <p>Laser-focussed, turbo-charged entrepreneur and coach.</p>
            <a href="mailto:kevin@effortlessmotion.com"><i className="circular inverted mail icon"></i></a>
            <a href="https://www.linkedin.com/in/kevinmalakoff" target="_blank"><i className="circular inverted linkedin icon"></i></a>
            <a href="https://github.com/kmalakoff" target="_blank"><i className="circular inverted github icon"></i></a>
            <a href="https://twitter.com/kmalakoff" target="_blank"><i className="circular inverted twitter icon"></i></a>
          </div>
        </div>
      </div>
    );
  }
}
