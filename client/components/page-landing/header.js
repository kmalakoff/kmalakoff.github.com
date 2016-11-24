import React from 'react';
import {Link} from 'react-scroll'; 

const LINKS = [
  {name: 'home', title: 'Home'},
  {name: 'about', title: 'About'},
  {name: 'team', title: 'Contact'},
];

export default class Header extends React.Component {
  state = {open: false};

  render() {
    return (
      <div className="ui large top fixed borderless menu">
        <div className="ui container">
          <div className="header item">Effortless Motion</div>
          <div className="right menu">
            {LINKS.map(x => <Link key={x.name} className="item" to={x.name} spy={true} smooth={true} duration={500}>{x.title}</Link>)}
          </div>
        </div>
      </div>
    );
  }
}
