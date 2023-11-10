import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../assets/logo-removebg-preview.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../../../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
        .then()
        .catch(error=> console.log(error))  
    }
    return (
        <Navbar collapseOnSelect expand="lg">

            <Link to="/">
                <Navbar.Brand href="#home"> <img style={{ maxWidth: '150px' }} src={logo}></img> </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">

                    <ActiveLink className='me-2 m-3 menu-link' to="/">Home</ActiveLink>
                    <ActiveLink className='me-2 m-3 menu-link' to="/blogs">Blog</ActiveLink>

                </Nav>
                
                <Nav>
                <FaUserCircle className='me-3' style={{ fontSize: "2rem" }}></FaUserCircle>
                    {
                        user ?
                        <button onClick={handleLogout}>Logout</button> :
                        <Link to="/login">Login</Link> 
                    }
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Header;