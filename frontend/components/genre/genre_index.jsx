import React from 'react';
import GenreIndexItem from './genre_index_item';

class GenreIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchGenres();
        this.props.fetchMovies();
    }

    select(genre) {
        return this.props.movies.filter(movie => movie.genre === genre)
    }

    render() {

        if (this.props.movies.length === 0) return null;

        return (
            <div>
                <div className="genre-types">
                    {this.props.genres.map((genre, idx) => (
                        <GenreIndexItem key={idx} genre={genre} movie={this.select(genre)} />
                    ))}
                </div>
            </div>
        )
    }
}

export default GenreIndex;