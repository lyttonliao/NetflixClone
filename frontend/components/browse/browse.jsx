import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../nav_bar';
import MovieIndexContainer from '../movie/movie_index_container';
import ListContainer from '../list/list_container';

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { currentUser, logout } = this.props;
        debugger
        return (
            <div className="LandingPage">
                <NavBar logout={logout} currentUser={currentUser} />

                <div className="landing-page-movie-distribution">
                    <MovieIndexContainer />
                </div>

                <Route path='/browse/my-list/:listId' component={ListContainer} />
            </div>
        )
    }
}

export default Browse;