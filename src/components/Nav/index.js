import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from 'react-bootstrap';

function Navbar() {

    return(
        <>
        <Nav fixed='top' className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Mission</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" >
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>

      </>
    )
};

export default Navbar;