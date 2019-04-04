import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import NavBar from '../nav_bar';
// import MovieIndexContainer from '../movie/movie_index_container';
import AllMovies from '../movie/all_movies';
import MovieIndexContainer from '../movie/movie_index_container';

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }
 
    //  <div className="My List">My List</div> ADD THIS LATER WHEN YOU DO LIST

    render() {
        const { currentUser, logout } = this.props;
        
        return (
            <div className="LandingPage">
                <NavBar logout={logout} />

                <div className="landing-page-movie-distribution">
                    <MovieIndexContainer />
                </div>
            </div>
        )
    }
}

export default Browse;