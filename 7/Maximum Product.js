function adjacentElementsProduct(x) {
    let max = x[0]*x[1]
    for(let i=1; i<x.length-1;i++){
        if(x[i]*x[i+1]>max){
            max=x[i]*x[i+1]
        }
    }
    return max
}