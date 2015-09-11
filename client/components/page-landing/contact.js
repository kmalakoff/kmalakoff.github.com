import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div id="tf-contact" className="text-center">
        <div className="container">

          <div className="row">
            <div className="col-md-8 col-md-offset-2">

              <div className="section-title center">
                <h2>Feel free to <strong>contact us</strong></h2>
                <div className="line">
                  <hr/>
                </div>
                <div className="clearfix"></div>
                <small><em>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</em></small>
              </div>

              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Message</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>

                <button type="submit" className="btn tf-btn btn-default">Submit</button>
              </form>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
