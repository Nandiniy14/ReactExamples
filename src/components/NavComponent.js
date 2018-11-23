import React, { Component } from 'react';
import {  Link } from "react-router-dom";

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export default class NavComponent extends Component {

    render() {
        return (
            <div>
               <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav pullRight>
                    <LinkContainer to={'/'} exact>
                        <NavItem>
                            Home
                       </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/about/'} exact>
                        <NavItem>
                            About
                       </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/users/'} exact>
                        <NavItem>
                            Users
                       </NavItem>
                    </LinkContainer>  
                </Nav>
            </Navbar>;
            
            </div>
           );
    }

}