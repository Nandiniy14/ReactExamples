import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Users = () => <h2>Users</h2>;

const App = () => (
    <Router>
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
            
            
            
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
        </div>
    </Router>
);


export default App;