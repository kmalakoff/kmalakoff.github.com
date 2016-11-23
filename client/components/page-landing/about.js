import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img wrapper">
                <img className="" style={{width: '400px'}} src="https://static.pexels.com/photos/26822/pexels-photo.jpg"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-text">
                <div className="section-title">
                  <h2><strong>About Effortless Motion</strong></h2>
                  <hr/>
                  <div className="clearfix"></div>
                </div>
                <p className="intro">Founders need an experienced network to help turn their ideas and dreams into a successful business.</p>
                <br/>
                <p className="intro">As part of your network, I will coach, support, and advise you in:</p>
                <ul className="about-list">
                  <li>
                    <span className="fa fa-dot-circle-o"></span>
                    <strong>Entrepreneurship</strong> -<em>to quickly find product / market / business model fit</em>
                  </li>
                  <li>
                    <span className="fa fa-dot-circle-o"></span>
                    <strong>Product</strong> -<em>to deliver optimal business value to your customers</em>
                  </li>
                  <li>
                    <span className="fa fa-dot-circle-o"></span>
                    <strong>Development</strong> -<em>to achieve the results you need when you need them</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
