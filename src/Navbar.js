import React, { Component } from 'react';
import './portfolio.css';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <NavLink exact to='/' className='inactive-link' activeClassName='active-link'>Home</NavLink>
                <NavLink to='/influences' className='inactive-link' activeClassName='active-link'>Influences</NavLink>
                <NavLink to='/projects' className='inactive-link' activeClassName='active-link'>Projects</NavLink>
            </div>
        );
    }
}