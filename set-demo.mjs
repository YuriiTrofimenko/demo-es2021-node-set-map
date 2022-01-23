const employees = [
  {
    name: 'John',
    city: 'NewYork'
  },
  {
    name: 'Jahn',
    city: 'Paris'
  },
  {
    name: 'Bill',
    city: 'London'
  },
  {
    name: 'Mary',
    city: 'NewYork'
  }
]

const cities = new Set()

employees.forEach(e => {
  cities.add(e.city)
})
// demo comment 1
// demo comment 2
// demo comment 3

export { cities }
