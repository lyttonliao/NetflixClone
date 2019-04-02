import React from 'react';
// import { Link } from 'react-router-dom';

class Movie extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchMovies();
    }

    render() {
        debugger
        const movies = Object.values(this.props.movies);

        if (movies.length === 0) return null;

        return (
            <div>
                <div className="primary-movie">
                    
                    {/* <video src={this.props.movie[1].movieUrl} autoPlay="autoPlay" controls /> */}
                </div>
            </div>
        )
    }

}


export default Movie;