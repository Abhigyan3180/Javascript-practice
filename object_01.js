const mySym = Symbol("Key1")

const jsUser = {
    Name : "Abhigyan",
    Age : 21,
    Email : "abhigyan2638@gmail.com",
    [mySym] : "MY KEY",
    isloogedIn : true
}
//console.log(jsUser.Name);
//console.log(typeof jsUser[mySym]);
//console.log(jsUser);

 jsUser.greeting = function(){
    console.log('Hello Js User');
    
}
console.log(jsUser.greeting());

 jsUser.greeting02 = function () {
    console.log(`Hello Js User, ${this.Name}`);
    
  }
console.log(jsUser.greeting02());


