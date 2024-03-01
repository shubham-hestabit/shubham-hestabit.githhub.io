"use client";
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Navbar fixed='top' expand="lg" className="custom-background" variant='dark'>
      <Container>
        <Navbar.Brand href="/" className='fs-3' style={{ color: "aqua" }}>SHUBHAM SAINI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='h4' onClick={handleClick}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;