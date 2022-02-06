function fib (n) {
  if (n < 2) {
    return n
  }
  return fib(n - 2) + fib(n - 1)
}
// async data receiving
addEventListener("message", workerData => {
  const NUM = workerData.data
  const results = []
  for (let i = 1; i < NUM; i++) {
    results.push(fib(i))
  }
  // async data post
  // postMessage(results)
  console.log(results)
})