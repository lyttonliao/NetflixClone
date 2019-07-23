import React from 'react'
import { callbackify } from 'util';

const search = props => {
    let { data, styles, onEnter, callBack } = props.config

    let Trie = null

    const node = () => {
        let temp = {
            'isLeaf': false,
            'map': new Map(),
            'indexes': new Map()
        }
        return temp
    }

    // checks if the value for every key-value pairing is scalar (string)
    const check = (obj) => {
        for (const [_, v] of Object.entries(obj)) {
            if (JSON.stringify(v)[0] === '{') {
                return false
            }
        }
    }

    // inserting into Trie, sets word at index true
    const insert = (root, str, index) => {
        if (root === null) root = node()

        let temp = root;
        for (const x of str) {
            if (!temp.map.has(x)) {
                temp.map.set(x, node())
            }

            temp.indexes.set(index, true);
            temp = temp.map.get(x)
        }
        temp.isLeaf = true
        temp.indexes.set(index, true)
        Trie = root
    }

    // add words into Trie
    const add = (v, index) => {
        let words = String(v).replace(/[$a-z0-9]/gi,' ').split(" ")
        for (const word of words) {
            if (word.length > 0) {
                insert(Trie, word.toLowerCase(), index)
            }
        }
    }

    // if every value is scalar (string), then we want to add the word to the Trie
    // if the values are not scalar (string), we also want to perform a dfs through object to retrieve the values t
    const dfs = (obj, index) => {
        if (check(obj)) {
            for (const [_, v] of Object.entries(obj)) {
                add(v, index)
            }
        }

        for (const [_, v] of Object.entries(obj)) {
            if (JSON.stringify(v)[0] === '{') {
                dfs(v, index);
            } else {
                add(v, index)
            }
        }
    }

    // searches for string, returns the map of indexes that is true
    const search = (root, str) => {
        if (root === null) return false

        let temp = root
        for (const x of str) {
            temp = temp.map.get(x)

            if (!temp) return []
        }

        return temp.indexes
    }

    let suggested = []

    // if root is a leaf (after going through a dfs traversal), push it into the suggested array
    // traverses all children of the node
    const traverse = (root, str) => {
        if (root.isLeaf) {
            suggested.push(str);
            return
        }

        for (const [k, v] of root.map) {
            traverse(v, str+String(k))
        }
    }

    // add on to the words entered in search, adds onto suggested array
    const suggestions = (root, str) => {
        if (root === null) return false

        let temp = root
        for (let i = 0; i < str.length; i++) {
            temp = temp.map.get(string[i])

            if (!temp) return [];
        }

        if (!temp.isLeaf) {
            for (const [k, v] of temp.map) {
                traverse(v, str+String(k))
            }
        }
    }

    // for every movie, fill the Trie
    for (let i = 0; i < data.length; i++) {
        dfs(data[i], i)
    }

    //  searches for value based on target, fills filtered with the indexes of words that match the target
    //  fills suggestion
    const filteredData = (e, onEnter) => {
        let searchedVal = search(Trie, e.target.value.toLowerCase())
        let filtered = [];
        suggested = [];
        for (const [idx, _] of searchedVal) {
            filtered.push(data[idx])
        }

        if (!onEnter) {
            suggestions(Trie, e.target.value.toLowerCase(), suggested);
        }

        return {
            filtered,
            suggested
        }
    }

    const inputSearch = (e) => {
        if (e.target.value !== "") {
            callbackify(filteredData(e, false))
        } else {
            callbackify({ filtered: [], suggested: [] })
        }
    }

    const inputSearchOnEnter = (e) => {
        if (e.which === 13) {
            if (e.target.value !== "") {
                callback(filteredData(e, false))
            } else {
                callback({ filtered: [], suggested: [] })
            }
        }
    }

    let SearchBar
    if (onEnter === false) {
        SearchBar = <input className="input-field" style={styles} placeholder="Search" onChange={ (e) => inputSearch(e) }/>
    } else {
        SearchBar = <input className="input-field" style={styles} placeholder="Search" onKeyPress={(e) => inputSearchOnEnter(e)} />
    }

    return (
        <div>
            {SearchBar}
        </div>
    )
}

export default Search