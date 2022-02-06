const NUM = 42
const standardSuccess = (results) => console.log(results)
const standardFail = (error) => console.log(error)
function doJob (path, data) {
  return new Promise((resolve, reject) => {
    try {
      const worker = new Worker(path)
      worker.addEventListener("message", (result) => resolve(result.data))
      worker.addEventListener("exit", (error) => reject(error.data))
      worker.postMessage(data)
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
processResults(doJob('./js/fibWebWorker.mjs', NUM), standardSuccess, standardFail, () => console.log('End Fib'))
processResults(doJob('./js/factWebWorker.mjs', NUM), standardSuccess, standardFail, () => console.log('End Fact'))

