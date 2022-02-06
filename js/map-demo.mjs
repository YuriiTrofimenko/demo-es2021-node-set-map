import employees from './employees.mjs'

const empCountByCities = new Map()

employees.forEach(e => {
  empCountByCities.set(
    e.city, // key
    (empCountByCities.has(e.city)) ? empCountByCities.get(e.city) + 1 : 1)
    // value = 1 if the key not exists,
    // old value + 1 if the key exists
})

export {empCountByCities}