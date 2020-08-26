import React, { Component } from 'react'
import { Button, NavItem, NavLink, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio'

class Navbar extends Component {
    render() {
        return(
            <Nav className='links'>
                <Link to='/'>Home</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
            </Nav>
        )
    }
}

export default Navbar