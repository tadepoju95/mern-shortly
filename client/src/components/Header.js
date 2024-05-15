import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';



const Header = () => {
	
	return (
		<React.Fragment>
		<Navbar collapseOnSelect expand="md" >
		  <Container className="nav_nav">
		  <Navbar.Brand href="#home">
		  	<img src="/images/logo.svg" alt="Shortly-logo" className="header-logo" />
		  </Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav" className="navbarForMobile">
		  		<hr />
		    <Nav className="me-auto">
		      <Nav.Link href="#features" className="nav-item">Features</Nav.Link>
		      <Nav.Link href="#pricing" className="nav-item">Pricing</Nav.Link>
		      <Nav.Link href="#pricing" className="nav-item">Resources</Nav.Link>
		    </Nav>
		    <Nav className="nav-right-links">
		      <Nav.Link href="#deets" className="nav-item secondary-nav-item">Login</Nav.Link>
		      <Nav.Link href="#memes" className="signup-linkColor">Sign Up</Nav.Link>
		    </Nav>
		  </Navbar.Collapse>
		  </Container>
		</Navbar>
		</React.Fragment>
	);
}

export default Header;