import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {FaTwitter, FaGithub, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/lib/fa';


class NavBar extends Component {


render() {
  return <div className="NavBarContainer">
  					<div className="NavBar">
								<input type="checkbox" />
								<span></span>
								<span></span>
								<span></span>
							<ul className="menu">
								<Link to='/' style={{ textDecoration: 'none' }}><h3 className="h3">Home</h3></Link>
								<Link to='/#about' style={{ textDecoration: 'none' }}><h3 className="h3">About</h3></Link>
								<Link to='/' style={{ textDecoration: 'none' }}><h3 className="h3">Contact</h3></Link>
							
							<div className="socialMedia">
								<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/faulkenfett11"><FaTwitter className="smLogo"/></a>
								<a target="_blank" rel="noopener noreferrer" href="https://github.com/faulkenfett11"><FaGithub className="smLogo"/></a>
								<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justin-faulkenberry/"><FaLinkedin className="smLogo"/></a>
								<a target="_blank" rel="noopener noreferrer" href="https://facebook.com"><FaFacebook className="smLogo"/></a>
								<a target="_blank" rel="noopener noreferrer" href="https://instagram.com"><FaInstagram className="smLogo"/></a>
							</div>
							</ul>
						</div>
        </div>
}
};

export default NavBar;