import React from 'react'
import Trie from './trie'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
        }

        this.trie = new Trie();
        Object.values(this.props.movies).forEach(movie => this.trie.insertRecur(movie.title.toLowerCase()));

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({ text: e.target.value });
        // const searchlist = this.trie.wordsWithPrefix(this.state.text.toLowerCase())
        // let searchedMovies = []
        // if (this.state.text.length == 0) {
        //     searchedMovies = Object.values(this.props.movies).filter(movie => searchlist.includes(movie.title.toLowerCase()))
        // }
        // this.props.filterContent(searchedMovies)
    }

    handleSearch() {
        const searchlist = this.trie.wordsWithPrefix(this.state.text.toLowerCase())
        let searchedMovies = []
        if (this.state.text.length > 0) {
            searchedMovies = Object.values(this.props.movies).filter(movie => searchlist.includes(movie.title.toLowerCase()))
        } else {
            searchedMovies = []
        }
        this.props.filterContent(searchedMovies)
        this.props.currentSearch(this.state.text)
    }

    render() {
        this.handleSearch()
        return (
            <input type="text" onChange={this.handleChange} value={this.state.text}></input>
        )
    }
}

export default Search