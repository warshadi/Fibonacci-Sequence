/*
    Fibonacci Sequence
*/

let n1 = 0;
let n2 = 1;
let next;

function Fibonacci(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        // console.log(n1);
        result = n1;
        next = n1 + n2;
        n1 = n2;
        n2 = next;

    }
    console.log("Fibonacci Sequence is : " + result);
}

// Fibonacci(4);

Fibonacci(7);

// Fibonacci(43);