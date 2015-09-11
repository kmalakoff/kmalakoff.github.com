import React from 'react';
import {Link} from 'react-router';

const LINKS = [
  // {path: '/compare-politician', name: 'Compare Politician'},
  // {path: '/compare-party', name: 'Compare Party'}
];

class Header extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <nav id="tf-menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">Spirit8</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#tf-home" className="page-scroll">Home</a></li>
              <li><a href="#tf-about" className="page-scroll">About</a></li>
              <li><a href="#tf-team" className="page-scroll">Team</a></li>
              <li><a href="#tf-services" className="page-scroll">Services</a></li>
              <li><a href="#tf-works" className="page-scroll">Portfolio</a></li>
              <li><a href="#tf-testimonials" className="page-scroll">Testimonials</a></li>
              <li><a href="#tf-contact" className="page-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

    // let path = this.context.router.getCurrentPath()
      // <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
      //   <div className="container-fluid">
      //     <div className="navbar-header">
      //       <a className="navbar-brand" href="">Voting Analysis</a>
      //     </div>
      //   </div>
      // </nav>
          // <div className="navbar-collapse">
          //   <ul className="nav navbar-nav">
          //     {LINKS.map((link) => {return <li key={link.path} className={link.path == path ? 'active' : ''}><Link to={link.path}>{link.name}</Link></li>;})}
          //   </ul>
          //   <ul className="nav navbar-nav navbar-right">
          //     {(() => {if (op.DEBUG) return <li><button type="button" className="btn btn-xs" onClick={this.onClearCache}>Clear Cache</button></li>})()}
          //     {(() => {if (errors.length) return <li><span className="badge badge-danger">Errors {errors.length}</span></li>})()}
          //     {(() => {if (warnings.length) return <li><span className="badge badge-warning">Warnings {warnings.length}</span></li>})()}
          //   </ul>
          // </div>
