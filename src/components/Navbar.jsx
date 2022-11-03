import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        className='navbar'
        bg='light'
        expand='lg'
        sticky='top'
        variant='light'
        expanded={expanded}
        >
        <Container>
          <Navbar.Brand as={Link} to=''>
            MENDA LERENDA
            <img id='isologo' src={require("../images/lips.png")} alt='shirt' />
          </Navbar.Brand>
          <Navbar.Toggle
            type='btn'
            aria-controls='basic-navbar-nav'
            className='btn border-0'
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end flex-grow-1 pe-3'>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to=''>
                Inicio
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to='galeria'>
                Galeria
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to='eventos'>
                Eventos
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to='contacto'>
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
