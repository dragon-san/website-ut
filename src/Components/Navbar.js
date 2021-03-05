import React, { Component } from "react";
import './Navbar.css';

import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {

  state={clicked:false}
handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
}
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">

          <p className="logo-ut">UTTARANCHAL TR </p><i class="fas fa-mountain fa-2x"></i><p>VEL</p> <i class="fas fa-route fa-3x"></i>

<div className="menu-icon" onClick={this.handleClick}>

            <i className={this.state.clicked ?'fas fa-times':'fas fa-bars'}></i>

                </div>
        <div className="nav-content">
        
          <ul className={this.state.clicked ?'nav-menu active ': 'nav-menu'}>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={5500}
                duration={500}
              >
                Contact Us
              </Link>
            </li>

            
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
