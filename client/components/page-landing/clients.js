import React from 'react';

class Clients extends React.Component {
  render() {
    return (
      <div id="tf-clients" className="text-center">
        <div className="overlay">
          <div className="container">

            <div className="section-title center">
              <h2>Some of <strong>our Clients</strong></h2>
              <div className="line">
                <hr/>
              </div>
            </div>
            <div id="clients" className="owl-carousel owl-theme">
              <div className="item">
                <img src="img/client/01.png"/>
              </div>
              <div className="item">
                <img src="img/client/02.png"/>
              </div>
              <div className="item">
                <img src="img/client/03.png"/>
              </div>
              <div className="item">
                <img src="img/client/04.png"/>
              </div>
              <div className="item">
                <img src="img/client/05.png"/>
              </div>
              <div className="item">
                <img src="img/client/06.png"/>
              </div>
              <div className="item">
                <img src="img/client/07.png"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
