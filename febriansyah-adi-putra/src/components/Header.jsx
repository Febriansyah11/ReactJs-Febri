import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import '../assets/style/component.css'
import { Link } from "react-scroll";

class Header extends Component {
    render() {
        return (

            <Navbar collapseOnSelect bg="info" expand="lg" sticky="top" variant="dark" className="navbar-style text-raleway-header shadow d-flex flex-row pl-xl-5 pr-xl-5">
                
                <Navbar.Brand>
                            <Link
                                activeClass="active"
                                to="dashboard"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >DASHBOARD</Link>
                        </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >PORTFOLIO</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >ABOUT</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>CONTACT
                            </Link>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Header)
