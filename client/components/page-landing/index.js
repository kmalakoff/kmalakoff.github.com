import React from 'react';

import About from './about';
import Footer from './footer';
// import Header from './header';
import Home from './home';
import Team from './team';

export default class PageLanding extends React.Component {
  render() {
    return (
      <div>
        <Home/>
        <About/>
        <Team/>
        <Footer/>
      </div>
    );
  }
}

        // <Header/>
