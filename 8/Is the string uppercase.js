String.prototype.isUpperCase = function() {
    let str = this.split('');
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[i].toUpperCase()) {
            return false;
        }
    }
    return true;
}