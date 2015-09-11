import React from 'react';

import About from './about';
import Clients from './clients';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Portfolio from './portfolio';
import Services from './services';
import Team from './team';
import Testimonials from './testimonials';

class PageLanding extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <About/>
        <Team/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default PageLanding;
