/* console.log('from stack 1')
setTimeout(() => {
  console.log('timeout 1')
}, 0)
console.log('from stack 2') */

/* const intervalHandle = setInterval(() => {
  console.log('animation')
}, 1000)

setTimeout(() => {
  clearInterval(intervalHandle)
}, 6000) */

function fib (n) {
  if (n < 2) {
    return n
  }
  return fib(n - 2) + fib(n - 1)
}

function fact (n) {
  if (n === 1) {
    return 1
  }
  return fact(n - 1) * n
} // fact(2) = 2 * 1 = fact(2-1) * 2 = 1 * 2

console.log('Fib')
for (let i = 1; i < 45; i++) {
  console.log(fib(i))
}

console.log('Fact')
for (let i = 1; i < 45; i++) {
  console.log(fact(i))
}