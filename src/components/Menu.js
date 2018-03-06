
import React, { Component } from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import logo from '../img/_book_logo_header.png';
import './Menu.css';

class Menu extends Component{
    

    render(){
        return(
        <div className="container">
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/" target="_blank"><img src={logo} alt="Logo" /></a>
                    <a href="/">Book Shop</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/about">About</NavItem>
                        <NavItem eventKey={2} href="/contacts">Contact Us</NavItem>
                        <NavItem eventKey={3} href="/gallery">Gallery</NavItem>
                    </Nav>
                    <Nav pullRight>
                        
                        <NavItem eventKey={4} href="/cart">Cart
                        { (this.props.cartItemsNumber > 0)?(<Badge className="badge">{this.props.cartItemsNumber}</Badge>):('')}
                        </NavItem>
                        <NavItem eventKey={5} href="/login">Log in</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }    
}

export default Menu;