// Write a TypeScript function that can add, subtract, multiply, divide and find the remainder of two numbers. 
type Operation = "add" | "subtract" | "multiply" | "divide";

// function 

function calculation (Operation : Operation , a : number , b : number) : number |  undefined { 

    switch (Operation) {
        case 'add' :
            return a + b
        case 'subtract' :
            return a - b
        case 'multiply' :
            return a * b
        case 'divide' :
            if (b !==0) {
                return a / b
            }
            else {
                console.error ('Error: Division by zero is not allowed');
                return undefined ;
            }
          
        default :
            console.error ('Error: Invalid operation');
            return undefined
    }
}


// example of calling and usage of this function 

console.log (calculation ('add' , 4 , 2));
console.log (calculation ('subtract' , 4 , 2));
console.log (calculation ('multiply' , 4 , 2));
console.log (calculation ('divide' , 4 , 2));
console.log (calculation ('divide' , 4 , 0));
