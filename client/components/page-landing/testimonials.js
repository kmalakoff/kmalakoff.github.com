import React from 'react';

class Testimonials extends React.Component {
  render() {
    return (
      <div id="testimonials" className="testimonials text-center">
        <div className="overlay">
          <div className="container">
            <div className="section-title center">
              <h2><strong>Our clients’</strong> testimonials</h2>
              <div className="line">
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="testimonial owl-carousel owl-theme">
                  <div className="item">
                    <h5>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
                    <p><strong>Dean Martin</strong>, CEO Acme Inc.</p>
                  </div>

                  <div className="item">
                    <h5>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
                    <p><strong>Dean Martin</strong>, CEO Acme Inc.</p>
                  </div>

                  <div className="item">
                    <h5>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
                    <p><strong>Dean Martin</strong>, CEO Acme Inc.</p>
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

export default Testimonials;
