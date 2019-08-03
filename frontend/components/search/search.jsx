import React from 'react'
import Trie from './trie'
// import MovieIndexItem from '../movie/movie_index_item';
// import MovieInfo from '../movie/movie_info';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            // searchlistId: null,
        }

        this.trie = new Trie();
        Object.values(this.props.movies).forEach(movie => this.trie.insertRecur(movie.title.toLowerCase()));

        this.handleChange = this.handleChange.bind(this);
        // this.closeDropDown = this.closeDropDown.bind(this);
    }

    // setDropDown(id) {
    //     const that = this;
    //     return (movieId) => {
    //         if (that.state[id]) {
    //             that.setState({
    //                 [id]: movieId
    //             })
    //         } else {
    //             that.setState({
    //                 searchlistId: null
    //             });
    //             that.setState({
    //                 [id]: movieId
    //             })
    //         }
    //     }
    // }

    // closeDropDown() {
    //     this.setState({
    //         playlistId: null,
    //         actionId: null,
    //         disneyId: null,
    //         scifiId: null,
    //         dramaId: null,
    //         superheroId: null,
    //     })
    // }
    
    handleChange(e) {
        console.log(this.state);

        const searchlist = this.trie.wordsWithPrefix(this.state.text.toLowerCase())
        const searchedMovies = Object.values(this.props.movies).filter(movie => searchlist.includes(movie.title.toLowerCase()))
        this.setState({ text: e.target.value });
        this.props.addFilter(searchedMovies)
    }

    genreList() {
        return Object.values(this.props.genres).map(genre => {
            return genre.name;
        })
    }

    render() {
        // const moviesLIs = this.trie.wordsWithPrefix(this.state.text).map((m, i) => <li key={i}>{m}</li>);
        // const genres = this.genreList()

        // const searchlist = this.trie.wordsWithPrefix(this.state.text.toLowerCase())
        // const searchedMovies = Object.values(this.props.movies).filter(movie => searchlist.includes(movie.title.toLowerCase()))
        return (
            <input type="text" onChange={this.handleChange} value={this.state.text}></input>
        )

        // const fullsearch = searchedMovies.map(movie => {
        //     return <MovieIndexItem movie={movie} key={"0-" + movie.title} genres={genres} list={this.props.list} setDropDown={this.setDropDown('searchId')} droppedMovie={this.state.searchId} />;
        // })

        // if (this.state.text.length === 0) {
        //     return (
        //         <div>
        //             <input type="text" onChange={this.handleChange} value={this.state.text}></input>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <input type="text" onChange={this.handleChange} value={this.state.text}></input>

        //             <div id="movie-categories-0" className="movie-categories-videos">
        //                 <div id="movie-row-0" className="movie-row">
        //                     {fullsearch}
        //                 </div>
        //                 <MovieInfo movies={this.props.movies} movieId={this.state.searchId} createListMovie={this.props.createListMovie} removeListMovie={this.props.removeListMovie} list_movies={this.props.list_movies} close={this.closeDropDown} />
        //             </div>
        //         </div>
        //     );
        // }
    }
}

export default Search