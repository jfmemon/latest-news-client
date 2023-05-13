import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNavbar from '../LeftSideNavbar/LeftSideNavbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-4'>
            <Container>
                <Navbar.Brand><Link to='/'>Latest News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>All News</Nav.Link>
                        <Nav.Link>Breaking News</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
                        <Nav.Link>
                            
                                {
                                    user?.uid?
                                    <>
                                    <span>{user?.displayName}</span>
                                    <Button onClick={handleLogout} className='ms-3'>Logout</Button>
                                    </>
                                    : 
                                    <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                    </>
                                }
                                
                            
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <Image roundedCircle style={{ height: '30px' }} src={user.photoURL}></Image>
                                    :
                                    <FaUserAlt></FaUserAlt>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none' bg="light" variant="light">
                        <LeftSideNavbar></LeftSideNavbar>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;