function doSomething(x: number): number {
    if (x == 1) {
        return 1;
    }else{
        return x * doSomething(x - 1); 
    }
}

let result = doSomething(6);
console.log(result);