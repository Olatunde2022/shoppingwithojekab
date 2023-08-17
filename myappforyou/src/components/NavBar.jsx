import { Button, Container, Navbar, Nav, Dropdown, NavDropdown, img} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar  collapseOnSelect expand="lg" className="bg-primary fixed-top text-danger">
      <Container className="fw-bold ">
        <Navbar.Brand href="/" className="text-danger"> e-Shop       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-warning">Home</Nav.Link>
            <Nav.Link href="/about" className="text-warning">About</Nav.Link>
            <Nav.Link href="/" className="text-warning">Contact</Nav.Link>
            <Nav.Link href="/" className="text-warning">Gallery</Nav.Link>            
            <NavDropdown className="text-warning" title="Dropdown" id="collasible-nav-col" >
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar;