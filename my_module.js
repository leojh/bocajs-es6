const MyModule = {
  doSomething() {
    console.log("I'm doing something");
  },

  logEachEntry(arr) {
    return arr.forEach(item => console.log(item))
  }
}

export default MyModule

export function topLevelMethod() {
  console.log("you can import me separetely")
}

export function* getPeople() {
  yield { name: 'Leo', city: 'Coconut Creek' }
  yield { name: 'Rob', city: 'Boca' }
  yield { name: 'Ryan', city: 'Plantation' }
yield { name: 'Andy', city: 'Boca'}
}
