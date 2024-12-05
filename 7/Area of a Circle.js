let circleArea = function(radius) {
    if (radius<=0||typeof radius !== 'number')
        throw('error')
    else
    return +((Math.PI*radius*radius).toFixed(2))
};

console.log(circleArea(10))