import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import NavBar from '../nav_bar';
import Movie from '../movie/movie_index_container'
// import Movie from '../movie/movie_container';

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props;

        if (currentUser) {
            return (
                <div className="LandingPage">
                    <NavBar logout={logout} />
                    
                    <Movie />
                </div>
            )
        }
    }
}

export default withRouter(Browse);