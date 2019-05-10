import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <nav className='nav-bar'>
        <img src={logo} id='nav-logo' alt='threestar-logo'/>
        <div className='nav-main'>
          <Link to={'sections/movies'} className='nav-item nav-item-main'>Movies</Link>
          <a href='#' className='nav-item nav-item-main'>TV</a>
          <a href='#' className='nav-item nav-item-main'>Games</a>
          <a href='#' className='nav-item nav-item-main'>Interviews</a>
          <a href='#' className='nav-item nav-item-main'>News</a>
        </div>
        <div className='nav-sub'>
          <a href='#' className='nav-item nav-item-sub'>About</a>
          <a href='#' className='nav-item nav-item-sub'>Careers</a>
          <a href='#' className='nav-item nav-item-sub'>Blog</a>
        </div>
        <div className='mobile-menu'>X</div>
      </nav>
    );
  }
}

export default NavBar;