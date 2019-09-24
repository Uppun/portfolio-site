import React, { Component } from 'react';
import './portfolio.css';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        const {active} = this.props;
        
        return (
            <div className='navbar'>
                <a href='#home' className={active === 'home' ? 'active-link' : 'inactive-link'}>Home</a>
                <a href='#influences' className={active === 'influences' ? 'active-link' : 'inactive-link'}>Influences</a>
                <a href='#projects' className={active === 'projects' ? 'active-link' : 'inactive-link'}>Projects</a>
            </div>
        );
    }
}