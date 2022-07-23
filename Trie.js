/* trie data structure */
// Trie sometime called a Prefix tree.it is a special type of tree used to store associated data Structure. 
//A trie store data at each step and each step is called a trie.this is after new store words
//since there are finite number of letters when we put together as string.


let Node = function() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function() {
        this.end = true;
    }
    this.isEnd = function() {
        return this.end;
    }
}

let Trie = function() {

    this.root = new Node();

    this.add = function(input, node = this.root) {
        if (input.length == 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    };
    this.isWord = function(word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            };
        };
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    }
    this.print = function() {
        let words = new Array();
        let search = function(node = this.root, string) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                };
                if (node.isEnd()) {
                    words.push(string);
                };
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            };
        };
    }
}

myTrie = new Trie();

myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dark');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');

console.log(myTrie.isWord('doll'));
console.log(myTrie.isWord('dor'));
console.log(myTrie.isWord('dorf'));
console.log(myTrie.print());