import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../../Icon/'
import { useLocation } from 'react-router';

const Header = () => {
    const location = useLocation();
    // const { user, signOUtUser } = useContext(UserContext)
  
    return (
        <Navbar bg="light" expand="lg" className="pt-4 text-primary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img  
                    width="150"
                    height="80"
                    // className={`d-inline-block align-top ${location.pathname === '/' || location.pathname.includes("/booking/") ? 'logo' : ''}`} 
                    src="https://i.ibb.co/FHBKmhh/travel-logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="m-auto navBarSearchForm pl-3">
                        <FormControl type="text" placeholder="Search your Destination..." className={`mr-sm-2 ${location.pathname === '/' || location.pathname.includes("/booking/") ? 'search-input' : ''}`} />
                    </Form>
                <Nav className="me-auto">
               
                    <Nav.Link as={Link} className="px-4" to="/">News</Nav.Link>
                    <Nav.Link as={Link} className="px-4" to="/">Destination </Nav.Link>
                    <Nav.Link as={Link} className="px-4" to="/">Contact</Nav.Link>
                    <Nav.Link as={Link} className="px-4" to="/">Blogs</Nav.Link>
                    
                    {/* {user ? (
                        <>
                            <Nav.Link className="px-4 font-weight-bold" >{user.name.split(' ')[0]}</Nav.Link>
                            <Nav.Link className="px-4" onClick={signOUtUser} >Logout</Nav.Link>
                        </>
                        ) : (
                            <Nav.Link as={Link} className="px-4" to="/login">Login</Nav.Link>
                        )} */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
};

export default Header;