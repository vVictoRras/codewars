function drawStairs(n) {
    let str = "I\n "
    let result = "" ;
    for(let i = 1; i <= n; i++){
        if( i === n){break }
        result += str
        str += " "
    }
    return console.log(result += "I")
}

drawStairs(5)
