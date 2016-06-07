import MyModule, { getPeople } from './my_module'

// Example 1
var letters = ['a', 'b', 'c', 'd', 'f']
MyModule.logEachEntry(letters);

// Example 2
var allPeople = Array.from(getPeople())
var getBocaPeople = people => people.filter(p => p.city === 'Boca')
var bocaPeople = getBocaPeople(allPeople)

const messages = bocaPeople.map(p => `${p.name} lives in ${p.city}`)

MyModule.logEachEntry(messages)
