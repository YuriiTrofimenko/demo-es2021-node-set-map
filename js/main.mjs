// 1. Set Demo
import { cities as  citiesSet} from "./set-demo.mjs"
// 2. Map Demo
import { empCountByCities as citiesMap} from "./map-demo.mjs"

citiesSet.forEach(c => console.log(c))
console.log('***')
citiesMap.forEach((quantity, city) => console.log(city, quantity))