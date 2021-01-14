//NOTE: If a variables value should never change,
//      use const

//constant
const interestRate = 0.3;
console.log(interestRate);

//literal variables
let firstName = 'Niall'; //string
let lastName = 'Nulty'; //string
let age = 23; //number
let isApproved = true; //boolean

//object
let person = {
    name: 'Niall',
    age: 23
};

//dot notation
person.name = 'David';

//bracket notation
person['name'] = 'Colette';

//bracket notation with defined string
let selection = 'name';
person[selection] = 'Christopher'

//arrays
let selectedColors = ['red','blue'];
console.log(selectedColors[1]); //to access second element in array
selectedColors[2] = 3; //adding to array
console.log(selectedColors.length); //to return the number of elements in an array


//functions

 //Performing a task
 function greet(name, surname){
    console.log('Hello ' + name + ' ' + surname);
 }

 greet(firstName, lastName);
 greet(person.name, lastName);
 greet('Keith','Nulty');

 //Calculating a value
 function square(number){
    return number * number;
 }

 console.log(square(2));