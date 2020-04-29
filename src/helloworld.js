import { setTimeout } from "os";
import { fib } from "fib.so";

setTimeout(() => {
  console.log('timeout test');
}, 1000);

let preNow =  Date.now()
let result = fib(42);
console.log(`c result: ${result}`);
console.log('c fib cost: ', Date.now() - preNow);

const jsFib = (n) => {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return jsFib(n-1) + jsFib(n - 2)
  }
}

preNow =  Date.now()
result = jsFib(42);
console.log(`js result: ${result}`);
console.log('js fib cost: ', Date.now() - preNow);

