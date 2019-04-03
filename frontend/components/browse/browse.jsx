import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import NavBar from '../nav_bar';
// import MovieIndexContainer from '../movie/movie_index_container';

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }
 
    //  <div className="My List">My List</div> ADD THIS LATER WHEN YOU DO LIST

    render() {
        const { currentUser, logout } = this.props;
        debugger
        // const frontPageMovie = movies[1];
        
        return (
            <div className="LandingPage">
                <NavBar logout={logout} />

            </div>
        )
    }
}

export default Browse;