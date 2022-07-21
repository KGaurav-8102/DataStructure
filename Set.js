/* Set */

function mySet() {
    //the let collection which hold the set
    let collection = [];
    //this method will check the presense of an element and return true and false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    //this method will return all the value in set
    this.values = function() {
        return collection;
    }
    //this method will add an element
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }
    //this method remove an element from a set
    this.remove = function(element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };
    //this method return the size of collection
    this.size = function() {
        return collection.length;
    };
    //this method return union of two sets
    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e);
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    };
    //this method will return the intersections of two sets
    this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                return intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    //this method will return the differences of two sets
    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    //this method will test that vthe set is the subset of the two set
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    };
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

let setC = new Set();
let setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));