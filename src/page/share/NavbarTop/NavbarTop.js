import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { darkTheme, GlobalStyles, lightTheme } from '../../globalStyle/globalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

const NavbarTop = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const location = useLocation();
    const path = location.pathname;
    return (
        <Navbar bg="" expand="lg">
            <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
            <Container>
                <Navbar.Brand href="#home" className="link-style text-danger">Bitcoin</Navbar.Brand>
                <Navbar.Toggle className="bg-danger" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/' className={`link-style ${path === '/' ? 'active-link-style' : ''}`}>
                            Home
                        </Link>
                        <Link to='/admin' className={`link-style ${path === '/admin' ? 'active-link-style' : ''}`}>
                            Admin
                        </Link>
                        <Link to='/about' className={`link-style ${path === '/about' ? 'active-link-style' : ''}`}>
                            About us
                        </Link>
                        <div>
                            <button onClick={() => setIsDarkTheme(!isDarkTheme)} className={`btn rounded-pill ${isDarkTheme ? 'btn-light' : 'btn-dark'}`}>
                                {
                                    isDarkTheme ?
                                    <FontAwesomeIcon icon={faLightbulb} />
                                    :
                                    <FontAwesomeIcon icon={faMoon} />
                                }
                            </button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;