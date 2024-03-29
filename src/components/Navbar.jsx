import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-scroll";

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        className='navbar'
        bg='light'
        expand='lg'
        fixed='top'
        variant='light'
        expanded={expanded}>
        <Container>
          <Navbar.Brand href='/' className=''>
            MENDA LERENDA
            <img id='isologo' src='/lips.png' alt='lips' />
          </Navbar.Brand>
          <Navbar.Toggle
            type='btn'
            aria-controls='basic-navbar-nav'
            className='btn border-0'
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end flex-grow-1 pe-3'>
              <Nav.Link
                as={Link}
                to='inicio'
                spy={true}
                smooth={false}
                duration={0}
                offset={-48}
                onClick={() => setExpanded(false)}
                href=''>
                Inicio
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='galeria'
                spy={true}
                smooth={false}
                duration={0}
                offset={-48}
                onClick={() => setExpanded(false)}
                href=''>
                Galeria
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='eventos'
                spy={true}
                smooth={false}
                duration={0}
                offset={-48}
                onClick={() => setExpanded(false)}
                href=''>
                Eventos
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                to='eventos'
                spy={true}
                smooth={true}
                duration={0}
                onClick={() => setExpanded(false)}
                href=''>
                Contacto
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
