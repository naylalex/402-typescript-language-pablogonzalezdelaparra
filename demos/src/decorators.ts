// tsconfig.json experimentalDecorators: true

// Function for a decorator
function sealed() {
    console.log('Sealed() factory evaluated.');
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('Sealed called.');
    }
}
function color() {
    console.log('color() factory evaluated.');
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // Do something with target and value
        console.log('Color called.');
    }
}


// Decorator composition
class ExampleClass {
    @sealed()
    @color()
    doSomething() {}
}

