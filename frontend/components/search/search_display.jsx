import React from 'react';
import MovieIndexItem from '../movie/movie_index_item'
import MovieInfo from '../movie/movie_info'

class SearchDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchlistId: null,
        }
        this.closeDropDown = this.closeDropDown.bind(this)

    }

   setDropDown(id) {
        const that = this;
        return (movieId) => {
            if (that.state[id]) {
                that.setState({
                    [id]: movieId
                })
            } else {
                that.setState({
                    searchlistId: null
                });
                that.setState({
                    [id]: movieId
                })
            }
        }
    }

    closeDropDown() {
        this.setState({
            searchlistId: null,
        })
    }

    genreList() {
        return Object.values(this.props.genres).map(genre => {
            return genre.name;
        })
    }


    render() {
        const genres = this.genreList()
        const fullsearch = this.props.movie_titles.map(movie => {
            return <MovieIndexItem movie={movie} key={"0-" + movie.title} genres={genres} list={this.props.list} setDropDown={this.setDropDown('searchlistId')} droppedMovie={this.state.searchlistId} />;
        })
        return (
            <div className="searched-movies">
                <div className="movie-categories">
                    <div id="movie-categories-0" className="movie-categories-videos">
                        <div id="movie-row-0" className="movie-row">
                            {fullsearch}
                        </div>
                        <MovieInfo movies={this.props.movies} movieId={this.state.searchlistId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} list_movies={this.props.list_movies} close={this.closeDropDown} />
                    </div>
                </div>
            </div>
        );
    }

}

export default SearchDisplay