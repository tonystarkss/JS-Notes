var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2] ["eggs", 12]]; 
//Array List for shopping items and how much

function ourResuableFunction() {
    console.log("Heyya, Wolrd");
}

ourResuableFunction();
//Creating a function that outputs this text everytime the function is called 

function ourFunctionWithArgs(a, b) {
    console.log(a-b);
}
ourFunctionWithArgs(10, 5);
//A and B set to 10 and 5 with the console subracting A and B and outputting the answe

function fun1() {
    oopsGlobal = 5;
}
//Global scope example where oopsGlobal doesn't require var

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
//Local scope example 

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear ="sweater";

    return outerWear;
}
console.log(myOutfit());
//Local var takes over the global var which is t-shirt so outputs sweater

function myOutfit() {
    var outerWear ="sweater";

    return outerWear;
}
console.log(myOutfit());
console.log(outerWear());
//Outputs both Local and Global Scope

function timesFive(num) {
    return num *5;
}
console.log(timesFive(5));
//5 times 5 example

var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}
//Undifiened value return

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
//Assigment with a return value 

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//Outputs the before array and after array where 1 is poped and 6 is pushed to the end 

function welcomeToBooleans() {
    return true;
}
//Boolean function where the return value is either ture or false

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        reutrn "Yes, it's true"; 
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";

}

console.log(trueOrFalse(true));
//If statement example

function testEqual(val) {
    if (val == 12) {
        reutrn "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
//Checks to see if the value is equal which is not since its 10 not 12

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));
//Tripple equal sign makes this statment false since double equals is for numbers

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality("10", "10"));
//Not equal isnce its declared as A and B but the cosnole is searching for 10

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));
//Checking if the value is not equal to 99 

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));
//Check if its not true and 10 does not equal 17

function testGreaterThan(val) {
    if (val > 100) {
        return "over 100";
    }

    if (val > 10) {
        return "Over 10";   
    }
    return "10 or Under";
}

console.log(testGreaterThan(10));
//Checking if a value is greater than 100 and over 10 

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >+ 10) {
        return "10 or Over";   
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(10));
//Checking if a value is greater than or equal to 20 

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";   
    }
    return "55 or Over";
}

console.log(testLessThan(10));
//Checking if a value is less than 25

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";   
    }
    return "<ore than 24";
}

console.log(testLessOrEqual(10));
//Checking if a value is less than or equal to 12 or 24  

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25 ) {
            return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));
//Checks if value is greater than 50 AND under 25 at the same time

function testLogicalOr(val) {
    if (val <10 || val > 20 ) {
        return "Outside";
    }
    return "Inside";
}

console.log(tesLogicalOr(10));
//Checks if the value is greater than 10 OR lower than 20 

function testEsle(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller"; 
    }
    return result;
}

console.log(testElse(10));
//Else statement checking if the value is biiger or smaller than 5

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val <5) {
        reutrn "Smaller than 5";
    } else {
    return "Between 5 and 10";
    }

}

console.log(testElseIf(10));
//Else statment checking if the value is greater than 10 or smaller than 5 and if not return what its between

function orderMyLogic(val) {
    if (val <5) {
        return "Less then 5";
    } else if (val <10) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10"
    }
}

console.log(orderMyLogic(3));
//Correct order for else if statments higher value comes after lower value

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}

console.log(testSize(19)); 
//Outputting the result of the test size and its correspoding "name"

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
         case 4: 
            answer = "delta";
            break;
    }

    return answer;
}

console.log(caseInSwitch(2));
//Switch statement example

function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a": 
            answer = "apple";
            break;
        case "b": 
            answer = "bird";
            break;
        case "c": 
            answer = "cat";
            break;
        default
            answer = "stuff";
            break;
    }

    return answer;
}

console.log(switchOfStuff("a"));
//Switch statement example

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
             answer = "Mid";
             break;
        case 7:
        case 8:
        case 9:
             answer = "High";
             break;
    }
    return answer;
}

console.log(sequentialSizes(1));
//Switch Statement example for breaks

function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7: 
            answer = "Ate Nine";
            break;
    }
}
//Converted example of a chained if else statement to a switch statement 

 function isLess {
     return a < b;
 }

 console.log(isLess(10, 15)); 
 //Boolean example to return the value if true or false

 function abTest(a,b) {
    if (a < 0 || b < 0) {
        return undefined;
    }


    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
 }

 console.log(abTest(-2, 2));
 //Function to return a undefined variable

 var ourDog = {
     "name": "Camper",
     "legs": 4,
     "tails": 1,
     "friends": ["everything!"]
 };
//Creating an object example

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(testObj);
//Accessing objects using dot notation

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
//Accessing objects using bracket notation and calling them if the name has a space in it

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
//Accessing objects property 

var ourDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Code Campers"]
};

ourDog.name = "Happy Coder";
//Changing objects data 

var ourDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Code Campers"]
};

ourDog.bark = "bow-wow";
ourDog['bark'] = "woof!"
//Adding a property to an object

ourDog.bark = "bow-wow";
ourDog['bark'] = "woof!"

var ourDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Code Campers"]
    "bark": "woof!"
};

delete ourDog.tails; 
//Deleting a property to an object

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston";
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie"));
//Object lookup example

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"));
//Checking object properties

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man";
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube Video"
        ] 
    }
];
//Manipulate cimplex objects example

var myStoarage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; 

console.log(gloveBoxContents)
//Accessing nested objects

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "tress",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
//Accessing nested arrays 

var collection = {
    "2548": {
        "album": "slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
//Keep a copy of the collection

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

updateRecords(2468, "tracks", "test")
comsole.log(updateRecords(5439, "artist", "ABBA"));
//Push and 

var myArray = [];

var i = 0;
while(i < 5 ) {
    myArray.push(i);
    i++;
}

console.log(myArray);
//While loop example

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray)
//For While loop example

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);
//Odd numbers while loop

var ourArray = [];

for (var i = 9; i > 0; i -= 2) {
    ourArray.push(i);
}

console.log(myArray);
//Counting backwards with while loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(outTotal);
//For loop that adds all numbers together in the arrray

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++)
        product *= arr[i][j];
    }

    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product);
//Nesting for loops

var myArray = [];
var i = 10;

 do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);
//Do while loop 

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number":  "0543236543",
        "likes": ["Pizza", "Coding", "Borwine Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number":  "09943726843",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number":  "0487345643",
        "likes": ["Intriguing Cases", "Violin",]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number":  "unkown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstname === name) {
            return contacts[i][prop] || "No such property";
        } 
    }
    return "No such contact";
}

var data = lookUpProfile("Sherlock", "hello");

console.log(data); 
//Using for loops to create a lookup program

function randomFraction() {


    return Math.random();
}

cosnole.log(randomFraction());
//Generating a random fraction

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return MAth.floor(Math.random() * 10);
}

console.log(randomWholeNum());
//Generating a random whole number

function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (outMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

console.log(myRandom);
//Generating random numbers in a range

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");
//Convert string to interger

function convertToInteger(str) {
    return parseInt(str, 2)
}

converyToInteger("10011");
//Converting function with a radix

function checkEqual(a, b) {
    return a === b ? true : false;
}

checkEqual(1, 2);
//Turnary operator 

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10));
//Turnary operator with multiple operators

let catName = "Quincy";
let quote;

let catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}
//Let function example with a force strict rules 

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
//Scope using let function

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";

    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printMantTimes("CodeCamp");
//Const example (can't re declare a const but can with var), use let and const more then var 

function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5
    s[2] = 7;
}
editInPlace();

console.log(s);
//Edditing an array using const

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
       MATH_CONSTANTS.PI = 99; 
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj(); 

console.log(PI);
//Example of freezeing an object if we dont want them to change

const magic = () => new Date();
//Concise anonymous function

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myContact([1, 2], [3,4 ,5]));
//Argument into an arrow function

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
//How to get whole numbers out of an array using arrow functions

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));
//Return increments 

const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));
//Rest operator ... three dots

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();

console.log(arr2);
//Spread operator example

var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
//Old way

const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54
//New way assign objects into variables

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmmrw(avgTemperatures) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperatures
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
//Assigning objects to varaibles

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max:84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow: { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));
//Destructing assignment with nested objects

const [z, x] = [1, 2, 3, 4, 5, 6];
console.log(z, x);

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
})();

cosnole.log(a);
console.log(b);
//Destructing assignment arrays

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

    const [ , , ...arr] = list;

    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
//Destructing assingment with the rest operator ...

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    meidan: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));
//Desturcting assignment to pass an object

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years orderMyLogic.`;
//Template Literal example by using the ` instead of "" you can make multi line strings using ` ${} adds a variable to the string 

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipoed: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const reusltDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        reusltDisplayArray.push(`<li class ="text-warning">${arr[i]}</li>`)
    }
    return reusltDisplayArray;
}

const reusltDisplayArray = makeList(result.failure);
//Template literal 

const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male"));
//Simple fields

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);
//Simple fields

class SpaceShuttle {
    constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
    }
}
var zues = new SpaceShuttle('Jupiter');

console. log(zues.targetPlanet);

function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegeatable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
//Class syntax

class Book {
    constructor(author) {
        this._author = author;
    }
    get writer(){
        return this._author;
    // Getter
    }
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    //Setter
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
//Getter and Setter example