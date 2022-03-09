//Parameter has implicit type 'any'
function add(x, y ) {
    return x + y;
}

// Adding type any to parameters
function addw(x: any, y: any ) {
    return x + y;
}

// Log the following values to the console
add(2, 2)
add('2', '2')
add(true, false)

// Automatic type inference
let counter = 5;

// Explicit type assignment
let age: number = 5;

// String
let lastName: string = 'Moreno'

// Empty array
let drums: string[] = [];
drums.push("Drums");
drums.push("Djembe");
drums.push("Timpani");

// Boolean
let isDone: boolean = true;

// null
let foo = null;

let countDrums: number = 0;
//countDrums = "someString";

lastName = age.toString();

// Do note none of the compiled data types make it to JavaScript

interface Customer {
    firstName: string;
    lastName: string;
}

// The variable needs to have its fields implemented
let customer: Customer = {
    firstName: "Marciano",
    lastName: "Moreno"
  }
  console.log(customer.firstName);

