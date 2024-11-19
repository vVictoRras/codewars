/*let array=[6,8,10]
function find_average(array) {
    const result = array.reduce((a, b) => a + b, 0)
    const totalItems = array.length
    return (result / totalItems)
}
console.log(find_average(array))*/

const findAverage = array => array.reduce((a, b) => a + b, 0) / array.length