import React, { useState } from 'react';
import {
  Collapse,
  Navbar as Navbr,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {
  Link
} from 'react-router-dom'
import github from '../images/github.jpeg'
import linkedin from '../images/linkedin.png'
import './Styling.css'
import resume from '../images/resume.pdf'


const Navbar = () => {
  return (

    <nav className="navbar navbar-light fixed-top nav1">
    <div className="container-fluid">
      <Link className="navbar-brand header1" to='/'><img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/981/5022957981_eb0482ae-a651-4bc2-8064-743a9ea75ed1.png?cb=1617925199" className="mainImg" alt="logo" /></Link>
        <ul className="nav justify-content-end nav2">
          <li className="nav-item nav2">
            <Link className="nav-link nav2" to='/'>About</Link>
          </li>
          <li>
            <Link className="nav-link nav2" to={resume} target="_blank">Resume</Link>
          </li>
          <li className="nav-item nav2">
            <Link className="nav-link nav2" to='/portfolio'>Portfolio</Link>
          </li>
          <li className="nav-item nav2">
            <Link className="nav-link nav2" to='/contact'>Contact</Link>
          </li>
          <li>
          <a href='https://github.com/ohskie3' target="_blank" rel="noreferrer"><img src={github} className="smIcons" alt="github" /></a>
          <a href='https://www.linkedin.com/in/kyle-ohlwiler-b3b34942/' target="_blank" rel="noreferrer"><img src={linkedin} className="smIcons" alt="linked-in" /></a>
        </li>
      </ul>
    </div>
  </nav> 
  )
}

export default Navbar