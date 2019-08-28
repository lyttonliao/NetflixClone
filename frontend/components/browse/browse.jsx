import React from 'react';
import MovieIndexContainer from '../movie/movie_index_container';

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { currentUser, logout } = this.props;
        return (
            <div className="LandingPage">
                <div className="landing-page-movie-distribution">
                    <MovieIndexContainer />
                </div>
            </div>
        )
    }
}

export default Browse;