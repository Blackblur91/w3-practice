/* const arr = [`kutya`, `cica`, `mérési hiba`]

const numbers = [10, 20, 30, 40, 50] */

/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
} */

/* for (const element of arr) {
  console.log(element)
} */

//arr.forEach(element) => console.log(element))

//const newNumbers = []

/* numbers.forEach(function(number, index, array) {
  let newNumber = number * 2
  console.log(newNumber, index)
  newNumbers.push(newNumber)
})

console.log(newNumbers)
 */

/* const newNumbers = []

const mapResult = numbers.map(function(number, index, array) {
  let newNumber = number * 2
  console.log(newNumber, index, array)
  newNumbers.push(newNumber)
  return newNumber
})

console.log(newNumbers)
console.log(mapResult) */

/* const numberArray = [6, 11, 45, 8, 10, 16, 100]

const filterResult = numberArray.filter((number) => number % 5 === 0)

console.log(filterResult)
 */

const user = [
  {
    name: "Ricsi",
    age: 28,
    budget: 20000
  },
  {
    name: "Lajos",
    age: 28,
    budget: 37000
  },
  {
    name: "Olivér",
    age: 20,
    budget: 1200
  },
  {
    name: "Örs",
    age: 44,
    budget: 124000
  },

]

const usersWhithHighBudget = user.filter((user) => user.budget > 20000)
console.log(usersWhithHighBudget)

const youngAdultsUsers = user.filter(user => user.age > 25 && user.age < 40)
console.log(youngAdultsUsers)