
function getMatrix(number) {
    let arr=[];
    for (let i=0;i<number;i++)
        arr.push(Array.from({length:number},(v,j)=>j===i?1:0))
    return arr
}
console.log(getMatrix(5))