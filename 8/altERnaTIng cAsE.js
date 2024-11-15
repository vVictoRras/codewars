String.prototype.toAlternatingCase = function() {
    let res = "";

    for(let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            res += this[i].toLowerCase();
        } else {
            res += this[i].toUpperCase();
        }
    }

    return res;
}