const name="Abhigyan"
const repoCount = 50
console.log("Hello my name is "+ name + " and My repo count is "+ repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String("Abhigyan")
console.log(gameName[3]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('i'));

let newString01= gameName.substring(0,5);
console.log(newString01);
let newstring02=gameName.slice(0,4)
console.log(newstring02);

let url = "http://abhigyan/%20.com"
console.log(url.replace('%20','/anand'));

console.log(url.split('//'));







