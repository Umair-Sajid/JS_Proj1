// Declare a constant variable 'name' with the value 'umair'
const name = 'umair';

// Declare a constant variable 'isCool' with the boolean value true
const isCool = true;

// Declare a constant variable 'a' with the value 4
const a = 4;

// Declare a constant variable 'x' with the value null
const x = null;

// Declare a constant variable 's' with the value 'Hello world'
const s = 'Hello world';

// Declare a constant variable 'str' with the value 'hello,computers,code'
const str = 'hello,computers,code';

// Log the type of the variable 'name' to the console
console.log(typeof name); // string

// Log the type of the variable 'a' to the console
console.log(typeof a); // number

// Log the type of the variable 'a' to the console (repeated)
console.log(typeof a); // number

// Log the type of the variable 'a' to the console (repeated)
console.log(typeof a); // number

// Log the type of the variable 'a' to the console (repeated)
console.log(typeof a); // number

// Declare a constant variable 'age' with the value 22
const age = 22;

// Concatenation: Combine strings and variables to form a sentence and log it to the console
console.log('My name is ' + name + ' and my age is ' + age);

// Template string: Use template literals to form a sentence and log it to the console
console.log(`My name is ${name}`);

// Attempt to log the length of the variable 'age' (which is a number, so it will be undefined)
console.log(age.length); // undefined

// Template string: Use template literals to form a sentence and log it to the console (repeated)
console.log(`My name is ${name}`);

// Convert the string 's' to uppercase and log it to the console
console.log(s.toUpperCase()); // 'HELLO WORLD'

// Convert the string 's' to lowercase and log it to the console
console.log(s.toLowerCase()); // 'hello world'

// Get a substring of 's' from index 0 to 2, convert it to lowercase, and log it to the console
console.log(s.substring(0, 2).toLowerCase()); // 'he'

// Split the string 's' into an array of characters and log it to the console
console.log(s.split('')); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// Split the string 'str' into an array using ',' as a separator and log it to the console
console.log(str.split(',')); // ['hello', 'computers', 'code']

// Log the type of the variable 'str' to the console
console.log(typeof str); // string

// Log an empty line to the console
console.log();

// Convert the string 'str' to uppercase and log it to the console
console.log(str.toUpperCase()); // 'HELLO,COMPUTERS,CODE'

// Declare an array 'fruits' with initial values 'apple', 'banana', and 'mango'
const fruits = ['apple', 'banana', 'mango'];

// Assign the value 'grapes' to the 4th element (index 3) of the array 'fruits'
fruits[3] = 'grapes';

// Add the value 'grapes' to the end of the array 'fruits'
fruits.push('grapes');

// Add the value 'strawberry' to the beginning of the array 'fruits'
fruits.unshift('strawberry');

// Remove the last element from the array 'fruits'
fruits.pop();

// Check if 'fruits' is an array and log the result to the console
console.log(Array.isArray(fruits)); // true

// Get the index of the value 'mango' in the array 'fruits' and log it to the console
console.log(fruits.indexOf('mango')); // 2

// Log the entire 'fruits' array to the console
console.log(fruits); // ['strawberry', 'apple', 'banana', 'mango']

// Declare an object 'person' with properties: firstName, lastName, age, hobbies, and address
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dr. Appt',
        isCompleted: false
    },
]

// Log the entire 'todos' array to the console
console.log(todos);
// Log the 'text' property of the third item in the 'todos' array to the console
console.log(todos[2].text);

// Convert the 'todos' array to a JSON string and log it to the console
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// Loop from 0 to 9 and log each number to the console
for (let i = 0; i < 10; i++) {
    console.log(`for loop number: ${i}`);
}

// Initialize a variable 'w' to 0 and increment it while it's less than 13, logging each value to the console
let w = 0;
while (w < 13) {
    console.log(`While loop number: ${w}`);
    w++;
}

// Use the forEach method to log the 'text' property of each item in the 'todos' array to the console
todos.forEach(function (todo) {
    console.log(todo.text);
});

// Use the map method to create a new array 'todoid' containing the 'id' property of each item in the 'todos' array
const todoid = todos.map(function (todo) {
    return todo.id;
});
console.log(todoid);

// Use the filter method to create a new array 'todoSate' containing the 'text' property of items in the 'todos' array where 'isCompleted' is true
const todoSate = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
})
console.log(todoSate);

// Compare the string 'y' to the number 10 using strict equality (===)
const y = '10';
if (y === 10) {
    console.log('y is 10');
} else {
    console.log('y is not 10');
}

// Use else if to log different messages based on the value of 'f'
const f = 1;
if (f === 10) {
    console.log('f is 10');
} else if (f > 10) {
    console.log('f is greater than 10');
} else {
    console.log('f is less than 10');
}

// Use the ternary operator to set 'color' to 'red' if 'c' is greater than 10, otherwise 'blue'
const c = 10;
const color = c > 10 ? 'red' : 'blue';
console.log(color);

// Use a switch statement to log different messages based on the value of 'color'
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('Nor Red or blue');
        break;
}

// Define a function 'addNum' that logs the sum of two parameters to the console
function addNum(num4, num3) {
    console.log(num4 + num3);
}
addNum(7, 7);

// Define a function 'addNums' that returns the sum of two parameters, with default values of 3
function addNums(num1 = 3, num2 = 3) {
    return num1 + num2;
}
console.log(addNums(7, 9));

// Define an arrow function 'addnum' that returns the sum of two parameters and log the result to the console
const addnum = (m, n) => m + n;
console.log(addnum(4, 6))
// object oriented programing OOP


// constructor operator 
function Person(firstName, lastName, Dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Dob = new Date(Dob);
    // this.getBirthYear=function(){
    //     return this.Dob.getFullYear();
    // }
    // this.getFullName=function(){
    //     return`${this.firstName} ${this.lastName}`
    // }
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

// instantiate obj

const person1 = new Person('umair', 'sajid', 22 - 2 - 2000);
const person2 = new Person('hassan', 'shah', 22 - 2 - 2000);
const person3 = new Person('ahmad', 'ali', 22 - 2 - 2000);
console.log(person2);
console.log(person2.Dob);
// console.log(person1.getBirthYear());
console.log(person1.getFullName());






// Class 
class employe {
    constructor(firstName, lastName, Dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Dob = new Date(Dob);

    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`


    }


}
const employe1 = new Person('sa', 'jid', 9 - 2 - 2000);
console.log(employe1.getFullName());


// index.html

// This code will run in the browser and can access the DOM
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// multiple element selectors

// console.log(document.querySelectorAll('.items'));


// console.log(document.getElementsByClassName('items'));

// console.log(document.getElementsByTagName('li'));


// const items=document.querySelectorAll('.item');

// items.forEach((item)=>console.log(item));


// const ul=document.querySelector('.items');

// ul.lastElementChild.remove();

// ul.firstElementChild.textContent='hello';
// ul.children[2].innerText='Umair';
// ul.lastElementChild.innerHTML='<h1>Hello</h1>';

// const btn=document.querySelector('.btn');
// btn.style.background='red';


// btn.addEventListener('click',(e)=>{
//     // e.preventDefault();
//     document.querySelector('#my-form').style.background='red';
//     console.log('clicked');

// });
// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#ccc';
// });
// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#f4f4f4';
// })


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 2000);
    } else {
        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`Name: ${nameInput.value} | Email: ${emailInput.value}`));

        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        // Append to ul
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}