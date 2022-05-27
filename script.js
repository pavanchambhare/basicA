//higher order function
//function take another function as a argument it called higher order function

//forEach 
//filter
//map
//sort
//reduce


const arr = [5,2,3,4,6];



function dubble(x){
    return x* 2;
}
function triple(x){
    return x * 3;
}

const output = arr.map(triple);
console.log(output)
