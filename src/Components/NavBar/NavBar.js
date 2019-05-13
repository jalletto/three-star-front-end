import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './NavBar.css'

class NavBar extends Component {

  render() {
    return (
      <nav className='nav-bar'>
        <Link to='/'>
          <img src={logo} id='nav-logo' alt='threestar-logo'/>
        </Link>
        <div className='nav-main'>
          <Link to={'/sections/movies'} className='nav-item nav-item-main'>Movies</Link>
          <Link to={'/sections/tv'} className='nav-item nav-item-main'>TV</Link>
          <Link to={'/sections/games'} className='nav-item nav-item-main'>Games</Link>
          <Link to={'/sections/interviews'} className='nav-item nav-item-main'>Interviews</Link>
          <Link to={'/sections/news'} className='nav-item nav-item-main'>News</Link>
        </div>
        <div className='nav-sub'>
          <Link to={'/about'} className='nav-item nav-item-sub'>About</Link>
          <Link to={'/careers'} className='nav-item nav-item-sub'>Careers</Link>
          <Link to={'sections/blog'} className='nav-item nav-item-sub'>Blog</Link>
        </div>
        <div className='mobile-menu'>X</div>
      </nav>
    );
  }
}

export default NavBar;