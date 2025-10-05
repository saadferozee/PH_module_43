import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router';

const Sidebar = () => {
    return (
        <aside className='sidebar mr-6 border p-4'>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/users2'>Users2</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
        </aside>
    );
};

export default Sidebar;