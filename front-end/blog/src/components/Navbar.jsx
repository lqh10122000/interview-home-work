import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import {NavLink} from  'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.scss';


Navbar.propTypes = {
    
};

function Navbar(props) {

    return (
        <header>
            <Container className="navbar">

                <Row className="navbar-row">
                    
                    <Col xs="3">

                        <NavLink
                            
                            exact
                            to="/blog"
                            >
                            <img src="https://icon-library.com/images/icon-for-blog/icon-for-blog-28.jpg" className="navbar-row-logo"/>
                        </NavLink>
                       

                        
                    </Col>

                    <Col xs="6"  className="navbar-row-col1">
                        <NavLink

                            className="navbar-row-col1_a"
                            exact

                            to="/blog"
                            activeClassName="header__link--active"
                            >
                            Blogs
                        </NavLink>
                    
                    </Col>
                
                    <Col xs="3" className="navbar-row-col2"> 
                    
                        <Row>
                            <Col xs="auto">
                                <NavLink

                                    className="navbar-row-col2_a"
                                    exact

                                    to="/login"
                                    activeClassName="header__link--active"
                                    >
                                    Sign In
                                </NavLink>

                            </Col>

                            <Col xs="auto"> | </Col>

                            <Col xs="auto">

                            <NavLink
                                className="navbar-row-col2_a"
                                exact
                                to="/register"
                                activeClassName="header__link--active"
                                >
                                Sign Up
                            </NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        
        </header>
    );
}

export default Navbar;