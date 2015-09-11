import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <div id="services" className="services text-center">
        <div className="container">
          <div className="section-title center">
            <h2><strong>Services</strong></h2>
            <div className="line">
              <hr/>
            </div>
            <div className="clearfix"></div>
            <small><em>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</em></small>
          </div>
          <div className="space"></div>
          <div className="row">
            <div className="col-md-3 col-sm-6 service">
              <i className="fa fa-desktop"></i>
              <h4><strong>Web design</strong></h4>
              <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>

            <div className="col-md-3 col-sm-6 service">
              <i className="fa fa-mobile"></i>
              <h4><strong>Mobile Apps</strong></h4>
              <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>

            <div className="col-md-3 col-sm-6 service">
              <i className="fa fa-camera"></i>
              <h4><strong>Photography</strong></h4>
              <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>

            <div className="col-md-3 col-sm-6 service">
              <i className="fa fa-bullhorn"></i>
              <h4><strong>Marketing</strong></h4>
              <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
