import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = (props) => {
    return (
        <nav className="main-header">
            <ul className="primary-nav">
                <li><p>Home</p></li>
                <li><p>TV Shows</p></li>
                <li><p>Movies</p></li>
                <li><p>Recently Added</p></li>
                <li><p>My List</p></li>
            </ul>

            <ul className="secondary-nav">
                <li><p>Search</p></li>
                <li><p>KIDS</p></li>
                <li><p>DVD</p></li>
                <li><p>Notifications</p></li>
                
                <div className="profile-dropdown">
                    <li><p>User</p></li>
                    <li><p>Account</p></li>
                    <li><p>Help Center</p></li>
                    <li><Link to="/" onClick={props.logout}><p>Log Out</p></Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;