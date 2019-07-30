import React from 'react'
import Trie from './trie'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);

        this.trie = new Trie();
        // movies.forEach(m => this.trie.insertRecur(m));
    }


    handleChange(e) {
        console.log(this.state);
        this.setState({ text: e.target.value });
    }

    render() {
        // const moviesLIs = this.trie.wordsWithPrefix(this.state.text).map((m, i) => <li key={i}>{m}</li>);

        return (
            <div>
                {/* <h1>Trie Search</h1> */}
                <input type="text" onChange={this.handleChange} value={this.state.text}></input>

                <div>
                    <ul>
                        {/* {moviesLIs} */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Search