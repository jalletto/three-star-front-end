import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './NavBar.css'

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
      showMenu : true
    }
  }

  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu})
  }

  handleWindowResize = () => {
    if(window.innerWidth > 900 && !this.state.showMenu) {
      this.setState({showMenu: true, isMobile: false})
    } else if(window.innerWidth < 900 && this.state.showMenu){
      this.setState({showMenu: false, isMobile: true})
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    return (
      <nav className='nav-bar'>
        <Link className='home-link' to='/'>
          <img src={logo} id='nav-logo' alt='threestar-logo'/>
        </Link>
        <div className='mobile-menu' onClick={()=> this.toggleMenu()}>
          <div className=' bar bar1'></div>
          <div className=' bar bar2'></div>
          <div className=' bar bar3'></div>
        </div>
        <div className={this.state.showMenu ? 'nav-main' : 'hidden'}>
          <Link to={'/sections/movie'} className='nav-item nav-item-main'>Movies</Link>
          <Link to={'/sections/tv'} className='nav-item nav-item-main'>TV</Link>
          <Link to={'/sections/game'} className='nav-item nav-item-main'>Games</Link>
          <Link to={'/sections/interview'} className='nav-item nav-item-main'>Interviews</Link>
          <Link to={'/sections/new'} className='nav-item nav-item-main'>News</Link>
        </div>
        <div className={this.state.showMenu ? 'nav-sub' : 'hidden'}>
          <Link to={'/about'} className='nav-item nav-item-sub'>About</Link>
          <Link to={'/careers'} className='nav-item nav-item-sub'>Careers</Link>
          <Link to={'sections/blog'} className='nav-item nav-item-sub'>Blog</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;