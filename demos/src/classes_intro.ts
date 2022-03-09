class Employee {
    // Properties
    firstName = '';
    lastName = '';
    employeeId = 0;

    // Constructor
    constructor(fname: string, lname: string, empid: number) {
        this.firstName = fname;
        this.lastName = lname;
        this.employeeId = empid;
    }
}

// Test generated code with ES2017 and ES5
let employee = new Employee("Juan", "Gonzalez", 99);

class RefactoredEmployee {
    // No properties defined statically
    // Constructor
    constructor(public firstName: string, public lastName: string, public employeeId: number) {
    }
}

let refactoredEmployee = new RefactoredEmployee("Hernán", "Rincón", 100);
console.log(refactoredEmployee);