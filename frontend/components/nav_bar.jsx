import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = (props) => {
    return (
        <div className="main-header">
            <ul className="primary-nav">
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Recently Added</li>
                <li>My List</li>
            </ul>

            <ul className="secondary-nav">
                <li>Search</li>
                <li>KIDS</li>
                <li>DVD</li>
                <li>Notifications</li>
                
                <div className="profile-dropdown">
                    <li>user</li>
                    <li>Account</li>
                    <li>Help Center</li>
                    <li><Link to="/" onClick={props.logout}>Log Out</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default NavBar;