import React, { Component } from 'react';
import logo from '../../logo.png'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <nav id='nav-bar'>
        <img src={logo} id='nav-logo'/>
        <div id='nav-main'>
          <a class='nav-item nav-item-main' >Movies</a>
          <a class='nav-item nav-item-main' >TV</a>
          <a class='nav-item nav-item-main' >Games</a>
          <a class='nav-item nav-item-main' >Interviews</a>
          <a class='nav-item nav-item-main' >News</a>
        </div>
        <div id='nav-sub'>
          <a class='nav-item nav-item-sub' >About</a>
          <a class='nav-item nav-item-sub' >Careers</a>
          <a class='nav-item nav-item-sub' >Blog</a>
        </div>
      </nav>
    );
  }
}

export default NavBar;