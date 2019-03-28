import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props;

        if (currentUser) {
            return (
                <div>
                    <button onClick={logout}>Log Out</button>
                </div>
            )
        } else {
            return (
                <>
                    <Link to="/signup"> Sign Up </Link>
                    <Link to="/login"> Log In </Link>
                </>
            )
        }
    }
}

export default withRouter(Greeting);