import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="navbar-top" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Tour Plan</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="nav-link" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-link" to="/home#our-packages">Packages</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-link" to="/home#about">About</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="success">Logout</Button> :
                            <Nav.Link as={Link} className="nav-link" to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </>
    );
};

export default Header;