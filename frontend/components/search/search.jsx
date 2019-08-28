import React from 'react'
import Trie from './trie'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.current_search,
        }
        
        this.trie = new Trie();
        this.handleChange = this.handleChange.bind(this);
        // this.handleSearch.call(this);
    }
    
    handleChange(e) {
        this.setState({ text: e.target.value });
        this.handleSearch();
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
        // return (
        //     <div>Hello!</div>
        // )
        // this.handleSearch();
        if (Object.values(this.props.movies).length == 0) return null;
        if (Object.values(this.trie.root.children).length == 0) {
            Object.values(this.props.movies).forEach(movie => this.trie.insertRecur(movie.title.toLowerCase()));
        }

        return (
            <form id="search-bar">
                <input className="search" type="text" onChange={this.handleChange} value={this.state.text} placeholder="Search for Movies"></input>
            </form>
        )
    }
}

export default Search