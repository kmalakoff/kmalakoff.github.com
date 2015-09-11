import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div id="tf-works">
        <div className="container">
          <div className="section-title text-center center">
            <h2>Take a look at <strong>our services</strong></h2>
            <div className="line">
              <hr/>
            </div>
            <div className="clearfix"></div>
            <small><em>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</em></small>
          </div>
          <div className="space"></div>

          <div className="categories">

            <ul className="cat">
              <li className="pull-left"><h4>Filter by Type:</h4></li>
              <li className="pull-right">
                <ol className="type">
                  <li><a href="#" data-filter="*" className="active">All</a></li>
                  <li><a href="#" data-filter=".web">Web Design</a></li>
                  <li><a href="#" data-filter=".photography">Photography</a></li>
                  <li><a href="#" data-filter=".app" >Mobile App</a></li>
                  <li><a href="#" data-filter=".branding" >Branding</a></li>
                </ol>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>

          <div id="lightbox" className="row">

            <div className="col-sm-6 col-md-3 col-lg-3 branding">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href="#">
                    <div className="hover-text">
                      <h4>Logo Design</h4>
                      <small>Branding</small>
                      <div className="clearfix"></div>
                      <i className="fa fa-plus"></i>
                    </div>
                    <img src="img/portfolio/01.jpg" className="img-responsive" alt="..."/>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3 photography app">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href="#">
                    <div className="hover-text">
                      <h4>Logo Design</h4>
                      <small>Branding</small>
                      <div className="clearfix"></div>
                      <i className="fa fa-plus"></i>
                    </div>
                    <img src="img/portfolio/02.jpg" className="img-responsive" alt="..."/>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3 branding">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href="#">
                    <div className="hover-text">
                      <h4>Logo Design</h4>
                      <small>Branding</small>
                      <div className="clearfix"></div>
                      <i className="fa fa-plus"></i>
                    </div>
                    <img src="img/portfolio/03.jpg" className="img-responsive" alt="..."/>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3 branding">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href="#">
                    <div className="hover-text">
                      <h4>Logo Design</h4>
                      <small>Branding</small>
                      <div className="clearfix"></div>
                      <i className="fa fa-plus"></i>
                    </div>
                    <img src="img/portfolio/04.jpg" className="img-responsive" alt="..."/>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3 web">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href="#">
                    <div className="hover-text">
                      <h4>Logo Design</h4>
                      <small>Branding</small>
                      <div className="clearfix"></div>
                      <i className="fa fa-plus"></i>
                    </div>
                    <img src="img/portfolio/05.jpg" className="img-responsive" alt="..."/>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3 app">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href="#">
                    <div className="hover-text">
                      <h4>Logo Design</h4>
                      <small>Branding</small>
                      <div className="clearfix"></div>
                      <i className="fa fa-plus"></i>
                    </div>
                    <img src="img/portfolio/06.jpg" className="img-responsive" alt="..."/>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3 photography web">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href="#">
                    <div className="hover-text">
                      <h4>Logo Design</h4>
                      <small>Branding</small>
                      <div className="clearfix"></div>
                      <i className="fa fa-plus"></i>
                    </div>
                    <img src="img/portfolio/07.jpg" className="img-responsive" alt="..."/>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3 web">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a href="#">
                    <div className="hover-text">
                      <h4>Logo Design</h4>
                      <small>Branding</small>
                      <div className="clearfix"></div>
                      <i className="fa fa-plus"></i>
                    </div>
                    <img src="img/portfolio/08.jpg" className="img-responsive" alt="..."/>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
