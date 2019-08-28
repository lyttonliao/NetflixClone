import React from 'react'

class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root = this.root) {
        let letter = word[0];
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter]);
        }
    }

    wordsWithPrefix(prefix, root = this.root) {

        if (prefix.length === 0) {
            let allWords = [];

            if (root.isTerminal) allWords.push('');

            for (let letter in root.children) {
                let child = root.children[letter];

                let suffixes = this.wordsWithPrefix('', child);
                let words = suffixes.map(word => letter + word);
                allWords.push(...words);
            }

            return allWords;
        } else {
            let firstLetter = prefix[0];
            let child = root.children[firstLetter];

            if (child === undefined) {
                return [];
            } else {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), root.children[firstLetter]);
                return suffixes.map(suffix => firstLetter + suffix);
            }
        }
    }
}

export default Trie;
