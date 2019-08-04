import React from 'react';
import MovieIndexItem from '../../components/movie/movie_index_item'
import MovieInfo from '../../components/movie/movie_info'
import NavBarContainer from '../nav_bar_container'

class SearchDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchlistId: null,
        }
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
            return <MovieIndexItem movie={movie} key={"0-" + movie.title} genres={genres} list={this.props.list} setDropDown={this.setDropDown('searchId')} droppedMovie={this.state.searchId} />;
        })
        return (
            <div>

                <div id="movie-categories-0" className="movie-categories-videos">
                    <div id="movie-row-0" className="movie-row">
                        {fullsearch}
                    </div>
                    <MovieInfo movies={this.props.movies} movieId={this.state.searchId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} list_movies={this.props.list_movies} close={this.closeDropDown} />
                </div>
            </div>
        );
    }

}

export default SearchDisplay