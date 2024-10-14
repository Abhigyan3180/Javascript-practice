const myArr01 = [0,1,2,3,4,5]
const myArr02 = new Array(1,2,3,4)

//myArr02.push(5)
//myArr01.pop()
myArr01.shift()
console.log(myArr01);
console.log(myArr02);

let marvelHeros = ["IronMan","CaptainAmrica","Hulk"]
let DCHeros =['Flash','Superman','Batman']

let AllHeros = [...DCHeros,...marvelHeros]
console.log(AllHeros);
console.log(Array.from("Abhigyan"));


