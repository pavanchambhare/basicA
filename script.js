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

//tarnary oprator

let num = 8;
let result


console.log( 0 == "0" ,"hhh")



//  const result1 = num%2 == "0" ? "even" : "odd"//odd
// const result2 = num%2 === 0 ? "even" : "odd"//even
// const result3 = num%2 == 0 ? "even" : "odd"//even


// console.log(result,result1,result2,result3)

let mm  = 1 ;

// Pavn is superhero

for (mm = 1; mm <= 9;   mm++){
    console.log(mm , "Code With Pavan")
}
console.log(mm , "Code With Pavan" )

// date comparison

// var date1  = new Date();
// var date2 = new Date();
// console.log(date1 === date2);


// let date1 = new Date();
// let date2 = date1;
// console.log(date1 === date2)


// let  date1 = new Date();
// date1.toDateString();

// console.log(date1)


// if(window.confirm("are you sure")) {
//     deleteItem(itemId);
// }
// console.log()
// `
// let nu = "avhfbghfgd12345862";
// nu.slice(10);
// console.log(nu)`

// let month  = (new Date()) .getMonth()
// console.log(month)


// let mob = [ 2 , 6, 4, 8, 7, 2 , 4, 2,];
// mob.push(2 , 6 ,8 ,4);
// console.log(mob)

// let nam = [ 2 , 6, 8 , 4, 7 ,5]
// nam.shift(2)
// console.log(nam)

// let num1 = [2,5,6,5,4,2,5,5,2,5]
// let num2 = [2,6,1,5,1,5,5,5,2,5,8,8]
//  array = num1.concat(num2)
// console.log(array)


// // Use .shift to remove the first item of an array.

// let mobi = [ 2,6,5,3,5,8]
// mobi.shift()
// console.log(mobi)


// // Further .pop is used to remove the last item from an array.

// let numb = [1, 2, 8, 6, 4]
// numb.pop();
// console.log(numb)

// // Use .splice() to remove a series of elements from an array. .splice() accepts two parameters, 

// let goku = [2 , 6, 4, 8, 4, 6, 4]
// goku.splice(1,2)
// console.log(goku)


// // Use .unshift to add one or more items in the beginning of an array

// let men = [3,6,5,9,9,5]
// men.unshift(2,6)
// console.log(men)

// // Further .push is used to add items after the last currently existent item

// let naruto = [25,6,5,6,525,65,35]
// naruto.push(2,4,5,62,4,7)
// console.log(naruto)

// let obj = {
//     name: "Pavan",
//     age: "23",
//     group:"A+"
// }

// let pavan = {
//     name:"Pavan",
//     age:"25",
//     hight:5.8
// }
// console.log(obj)
// console.log(pavan)


// let  map = new Map()
// .set('pavan', 23)
// .set('lastName' , 'chambhare')

// console.log(map)

// let sasuke = new Map()
// .set('mahesh', 45)
// .set('lastName', 'chambhare')
// console.log(sasuke)


// let arra = [2,4,7,6,8,4].reverse()
// console.log(arra)

// let gojo = [1,6,6,4,7,8,2].reverse()
// console.log(gojo)

// let manito = new Map()
// .set('mahesh', 27)
// .set('goku' , 38)
// console.log(manito)


let array = [ 2,6,5,6,5,87,8]

function double(x) {
    return x * 2;

}

function triple(x){
    return x * 2;
}
function binary(x){
    return x.toString(2);
}


let outpu = array.map(double);
let hat = array.map(triple);
let hay = array.map(binary);

console.log(outpu);
console.log(hat);
console.log(hay);
