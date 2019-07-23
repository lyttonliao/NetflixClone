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

    // inserting into Trie
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

    // searches for string
    const search = (root, str) => {
        if (root === null) return false

        let temp = root
        for (const x of str) {
            temp = temp.map.get(x)

            if (!temp) return []
        }

        return temp.indexes
    }

     
}

export default Search