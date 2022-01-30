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
new Promise((resolve, reject) => {
  try {
    const results = []
    for (let i = 1; i < 45; i++) {
      results.push(fib(i))
    }
    resolve(results)
  } catch (error) {
    reject(error)
  }
}).then((results) => console.log(results))
  .catch((error) => console.log(error))
  .finally(() => console.log('End Fib'))

console.log('Fact')
new Promise((resolve, reject) => {
  try {
    const results = []
    for (let i = 1; i < 45; i++) {
      results.push(fact(i))
    }
    resolve(results)
  } catch (error) {
    reject(error)
  }
}).then((results) => console.log(results))
.catch((error) => console.log(error))
.finally(() => console.log('End Fact'))