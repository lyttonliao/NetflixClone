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
        const searchlist = this.trie.wordsWithPrefix(this.state.text.toLowerCase())
        const searchedMovies = Object.values(this.props.movies).filter(movie => searchlist.includes(movie.title.toLowerCase()))
        debugger
        this.props.filterContent(searchedMovies)
    }

    render() {
        return (
            <input type="text" onChange={this.handleChange} value={this.state.text}></input>
        )
    }
}

export default Search