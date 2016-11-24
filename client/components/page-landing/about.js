import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div id="about" className="ui vertical stripe segment about">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <h3 className="ui header">What we do</h3>
              <p>Founders need an experienced network to help turn their ideas and dreams into a successful business.</p>
              <p>As part of your network, I will coach, support, and advise you in:</p>
              <div className="ui bulleted list">
                <div className="item">Entrepreneurship - to quickly find product / market / business model fit</div>
                <div className="item">Product - to deliver optimal business value to your customers</div>
                <div className="item">Development - to achieve the results you need when you need them</div>
              </div>
            </div>
            <div className="six wide right floated column">
              <img src="./about.png" className="ui large bordered rounded image"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
