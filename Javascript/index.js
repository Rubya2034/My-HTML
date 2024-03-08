//array - first part

let computerlanguages = ["Javascript", "CSS", "HTML", "SQL", "C++"];


//objects - second part

var a = {} //object
var a = [] //array

//object = {key: value} pairs

var employee = {

    name: "Jane" ,
    department: "finance" ,
    age: "26" ,
    employeeNo: "02165"

}

//functions - third part


function findLargest(num1, num2, num3) {
    const numbers = [num1, num2, num3];
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 1];
}

const num1 = 10;
const num2 = 5;
const num3 = 8;
const result = findLargest(num1, num2, num3);
console.log(`The largest number is ${result}`);

