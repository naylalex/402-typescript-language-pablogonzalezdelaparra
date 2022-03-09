class Vendor {
    // Properties
    // Constructor
    constructor( 
        public firstName: string,
        public lastName: string,
        public vendorId: number
    ){ }
    
    // Function keyword is not required when the method is defined in a class
    requestProject(projectId: number) {
        console.log(projectId);
    }
}

// Test generated code with ES2017 and ES5
let vendor = new Vendor("Maribel", "Borja", 102);

vendor.requestProject(1);
