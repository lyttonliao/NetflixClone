import React from 'react';
import { Link } from 'react-router-dom';
import Search_Container from './search/search_container'
// import { ProtectedRoute } from '../../util/route_util';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     text: ""
        // }
        // this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(e) {
    //     // console.log(this.state);
    //     this.setState({ text: e.target.value });
    // }

    render() {
        const listId = this.props.currentUser.list_id;

        $(window).scroll(function () {
            const header = $(".main-header");
            const scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });

        return(
            <nav className="main-header">
                <div className="prim-nav-logo">
                    <Link to='/browse'><img className="landing-page-logo" src={window.logo1} alt="LandingPage Logo" /></Link>
                    <ul className="primary-nav">
                        <li><Link to='/browse'><p>Home</p></Link></li>
                        <li><Link to={`/browse/my-list/${listId}`}><p>My List</p></Link></li>
                    </ul>
                </div>

                <div className="sec-nav-dropdown">
                    <ul className="secondary-nav">
                        <Search_Container />
                    </ul>
                    <div className="profile-dropdown">
                        <img className="profile-icon" src={window.icon} alt="icon"/>
                        <div className="dropdown-content">
                            <div className="dropdown-section-1">
                                <li><p>{this.props.currentUser.email}</p></li>
                            </div>
                            <li className="profile-dropdown-divider"></li>
                            <div className="dropdown-section-2">
                                <li><Link to="/" onClick={this.props.logout}><p>Sign out of Flixit</p></Link></li>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }   
}

export default NavBar;