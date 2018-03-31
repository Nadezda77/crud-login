
import React, { Component } from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import logo from '../img/_book_logo_header.png';
import './Menu.css';
import { LinkContainer } from 'react-router-bootstrap';

class Menu extends Component{

    
    render(){
        return(
            <Navbar inverse fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/" target="_blank"><img src={logo} alt="Logo" /></a>
                    <a href="/">Book Shop</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/about">
                            <NavItem eventKey={1} >About</NavItem>
                        </LinkContainer>
                        {/* <LinkContainer to="/add-item">
                            <NavItem eventKey={2} >Contact Us</NavItem>
                        </LinkContainer> */}
                        <LinkContainer to="/gallery">
                            <NavItem eventKey={3} >Gallery</NavItem>
                        </LinkContainer>
                        
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/register">
                        <NavItem eventKey={5} >Register</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <NavItem eventKey={6} >Log in</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }    
}

export default Menu;