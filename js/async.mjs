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
import { Worker } from 'worker_threads'

const NUM = 42

const standardSuccess = (results) => console.log(results)
const standardFail = (error) => console.log(error)
function doJob (path, data) {
  return new Promise((resolve, reject) => {
    try {
      const worker = new Worker(path, { workerData: data })
      worker.on('message', (result) => resolve(result))
      worker.on('exit', (error) => reject(error))
      // resolve()
    } catch (error) {
      reject(error)
    }
  })
}
function processResults (promise, success, fail, finalizer) {
  promise.then(success)
    .catch(fail)
    .finally(finalizer)
}
processResults(doJob('./fibWorker.mjs', NUM), standardSuccess, standardFail, () => console.log('End Fib'))
processResults(doJob('./factWorker.mjs', NUM), standardSuccess, standardFail, () => console.log('End Fact'))

