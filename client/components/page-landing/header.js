import React from 'react';

import $ from 'jquery';
import scrollTo from '../../lib/scroll-to';
// import {Scrollspy} from 'react-scrollspy';

const LINKS = [
  {href: '#home', title: 'Home'},
  {href: '#about', title: 'About'},
  {href: '#team', title: 'Contact'},
];

export default class Header extends React.Component {
  componentDidMount() {
    $('body').scrollspy({target: '.menu', offset: 80})
  }
  state = {open: false};

  render() {
    return (
      <div className="ui large top fixed borderless menu">
        <div className="ui container">
          <div className="header item">Effortless Motion</div>
          <div className="right menu">
            {LINKS.map(x => <a key={x.href} className="item" href={x.href} onClick={scrollTo}>{x.title}</a>)}
          </div>
        </div>
      </div>
    );
  }
}


          // <Scrollspy className="right menu" items={ ['home', 'about', 'team'] } currentClassName="active" componentTag="div">
          //   {LINKS.map(x => <a key={x.href} className="item" href={x.href} onClick={scrollTo}>{x.title}</a>)}
          // </Scrollspy>


          // <div className="right menu">
          //   {LINKS.map(x => <a key={x.href} className="item" href={x.href} onClick={scrollTo}>{x.title}</a>)}
          // </div>
