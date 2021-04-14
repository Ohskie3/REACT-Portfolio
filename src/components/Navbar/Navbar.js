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


const Navbar = () => {
  return (

    <div>
      <Navbr color="light" light expand="md" className="myNav">
        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/981/5022957981_eb0482ae-a651-4bc2-8064-743a9ea75ed1.png?cb=1617925199" alt="My Logo" width="50" height="32" className="d-inline-block align-text-top" />
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
      </Navbr>
    </div>
  )
}

export default Navbar