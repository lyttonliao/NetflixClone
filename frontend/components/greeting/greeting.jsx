import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import NavBar from '../nav_bar';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props;

        if (currentUser) {
            return (
                <div className="LandingPage">
                    <NavBar logout={logout} />
                </div>
            )
        }
    }
}

export default withRouter(Greeting);