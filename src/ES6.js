// new feautres in ES6 

// Arrow Function 

//anonymous function 
let sum = function(a,b){
    return a + b;
}

// arrow function 
// remove keyword: function 
// if only one statement, no need for curly braces and return keyword is also not required 
// statement and parameter (parantheses) will be seperated by arrow symbol 
let sum1 = (a,b) => a + b

//with single paramter 
let greet = msg => console.log(msg);

// with no parameter
let age = () => console.log('My age goes here');

//multiple statements 
let checkAge = age =>{
    if(age>=18){
        return 'can vote'
    }
    else{
        return 'no vote'
    }
}
console.log(checkAge());

//Array 
const names = ['John', 'Ally', 'Peter']

//how we used to write 
// let fa = names.find(function(n){
//     return n == 'Peter'
// });

// arrow function in callback
let f = names.find(n => n=='Peter')
console.log(f)

// Destrucutre
// store each value as indivudal variable
let score = [10,20,30]

let[score1, score2, score3] = score;
console.log(score1)

//Object Destrucutre 
let person = {
    fname : 'Peter',
    lname : 'Parker',
    age : 40
}

let{firstname, lastname, age1} = person;

//Spread Operator
// ...
let food=['burger', 'sandwich']
let allfood = ['fries', 'fruits', food]
// use spread operator to combine or add values from one array to another 
let aFood = ['fries', 'fruits', ...food]
console.log(aFood)

//for objects 
let person1 = {fname: 'John', lname : 'Steward', age : 50}
console.log(person1)
let p2 = {...person1, age:60, salary : 40000}
console.log(p2)
let loc = {country : 'USA', pin : '1111'}
// merge 2 arrays or objects 
let allDetails = {...p2, ...loc}
console.log(allDetails)

// Promise Object in ES6
//response: data or error 

//consume API
let result = fetch('https://randomuser.me/api/') // assign response to result, it is now Promise object 
// console.log(result)
// handle promise object 
// result.then(response => console.log(response)) // success
// .catch(error => console.log(error))


//showing data from response:
result.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

