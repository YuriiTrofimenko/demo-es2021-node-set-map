import { workerData, parentPort } from 'worker_threads'
// async data receiving
const NUM = workerData
function fib (n) {
  if (n < 2) {
    return n
  }
  return fib(n - 2) + fib(n - 1)
}
const results = []
for (let i = 1; i < NUM; i++) {
  results.push(fib(i))
}
// async data post
parentPort.postMessage(results)