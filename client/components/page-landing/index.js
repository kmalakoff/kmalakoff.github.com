import React from 'react';

import About from './about';
// import Clients from './clients';
// import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Home from './home';
// import Services from './services';
// import Testimonials from './testimonials';
import Team from './team';

// import {Link, Element, Events, animateScroll, scrollSpy} from 'react-scroll';

class PageLanding extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <About/>
        <Team/>
        <Footer/>
      </div>
    );
  }
}

export default PageLanding;
