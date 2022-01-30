import employees from './employees.mjs'

const cities = new Set()

employees.forEach(e => {
  cities.add(e.city)
})
// demo comment 1
// demo comment 2
// demo comment 3

export { cities }
