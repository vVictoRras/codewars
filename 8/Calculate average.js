function find_average(array) {
    return array.reduce((result, current) => result + current, 0) / array.length;
}