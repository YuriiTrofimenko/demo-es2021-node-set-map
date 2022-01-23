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

const cities = []

employees.forEach(e => {
  if (!cities.includes(e.city)) {
    cities.push(e.city)
  }
})

export { cities }