import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/Ghcclogo.png';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export  const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
    return (

      // <Router>
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container fluid>
        <Navbar.Brand href="#"><a href="#home" ><img src={logo} alt="" className="logo"/></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link   className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link  className={activeLink === 'wwa' ? 'active navbar-link' : 'navbar-link'} onClick={() =>{  navigate('/wwa')}}>Who We are</Nav.Link>
            <Nav.Link   className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => navigate('/Pso')}>About PSO</Nav.Link>
            <Nav.Link href="#live" className={activeLink === 'live' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('live')}>Live services</Nav.Link>
            <Nav.Link href="#sermon"  className={activeLink === 'sermon' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sermon')}>Sermons</Nav.Link>
        
            <NavDropdown  title="Discipleship" id="navbarScrollingDropdown"  >
              <NavDropdown.Item href="#action6">School of Basics</NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                School of wisdom
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                School of Ministry
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">
                School of tyrannus
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#ministry"  className={activeLink === 'ministry' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ministry')}>Ministry Arms</Nav.Link>
            <Nav.Link href="#branches"  className={activeLink === 'branches' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('branches')}>Branches</Nav.Link>
            <Nav.Link href="#blog"  className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('branch')}>Blog</Nav.Link>
            <Nav.Link href="#connect"  className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
}
