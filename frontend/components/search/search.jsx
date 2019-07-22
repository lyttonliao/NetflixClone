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

    // checks if value is scalar
    const check = (obj) => {
        for (const [_, v] of Object.entries(obj)) {
            if (JSON.stringify(v)[0] === '{') {
                return false
            }
        }
    }

    const add = (v, index) => {
        let words = String(v).replace(/[$a-z0-9]/gi,' ').split(" ")
        for (const word of words) {
            if (word.length > 0) {
                insert(Trie, word.toLowerCase(), index)
            }
        }
    }

}

export default Search