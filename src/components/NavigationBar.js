import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

function NavigationBar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/" className="navlinks" >GPGIC</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link ><Link to='/addstudent' className="navlinks" >Add Student</Link></Nav.Link> */}
                    <Nav.Link ><Link to='/studentdata' className="navlinks" >Scan Result</Link></Nav.Link>
                </Nav>
                {
                    localStorage.getItem("user") ?
                        <Nav>
                            <Nav.Link><Link onClick={() => localStorage.removeItem('user')} className="navlinks">Logout</Link></Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link><Link to="/login" className="navlinks">Login</Link></Nav.Link>

                        </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
