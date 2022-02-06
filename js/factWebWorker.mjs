function fact (n) {
  if (n === 1) {
    return 1
  }
  return fact(n - 1) * n
} // fact(2) = 2 * 1 = fact(2-1) * 2 = 1 * 2
// async data receiving
addEventListener("message", workerData => {
  const NUM = workerData.data
  const results = []
  for (let i = 1; i < NUM; i++) {
    results.push(fact(i))
  }
  // async data post
  // postMessage(results)
  console.log(results)
})