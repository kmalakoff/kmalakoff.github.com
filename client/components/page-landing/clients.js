import React from 'react';

class Clients extends React.Component {
  render() {
    return (
      <div id="clients" className="clients text-center">
        <div className="overlay">
          <div className="container">

            <div className="section-title center">
              <h2>Some of <strong>our Clients</strong></h2>
              <div className="line">
                <hr/>
              </div>
            </div>
            <div className="clients owl-carousel owl-theme">
              <div className="item">
                <img src="img/client/01.png"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
