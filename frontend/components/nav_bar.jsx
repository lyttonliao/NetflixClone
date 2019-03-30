import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = (props) => {
    return (
        <nav className="main-header">
            <div className="prim-nav-logo">
                <img className="landing-page-logo" src={window.logo1} alt="LandingPage Logo"/>
                <ul className="primary-nav">
                    <li><p>Home</p></li>
                    <li><p>TV Shows</p></li>
                    <li><p>Movies</p></li>
                    <li><p>Recently Added</p></li>
                    <li><p>My List</p></li>
                </ul>
            </div>

            <div className="sec-nav-dropdown">
                <ul className="secondary-nav">
                    <li><p>Search</p></li>
                    <li><p>KIDS</p></li>
                    <li><p>DVD</p></li>
                    <li><p>Notifications</p></li>
                    
                </ul>
                <div className="profile-dropdown">
                    <img className="profile-icon" src={window.icon} alt="icon"/>
                    <div className="dropdown-content">
                        <div className="dropdown-section-1">
                            <li><p>User</p></li>
                        </div>
                        <li className="profile-dropdown-divider"></li>
                        <div className="dropdown-section-2">
                            <li><p>Account</p></li>
                            <li><p>Help Center</p></li>
                            <li><Link to="/" onClick={props.logout}><p>Sign out of Netflix</p></Link></li>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;