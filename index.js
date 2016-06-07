// Example 1
var letters = ['a', 'b', 'c', 'd', 'f']

function logEachEntry(arr) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    console.log(item);
  }

  console.log(i);
  console.log(item);
}

logEachEntry(letters);


// Example 2
function* getPeople() {
    yield { name: 'Leo', city: 'Coconut Creek' }
    yield { name: 'Rob', city: 'Boca' }
    yield { name: 'Ryan', city: 'Plantation' }
    yield { name: 'Andy', city: 'Boca'}
}

var peopleGetter = getPeople()

var allPeople = []
allPeople.push(peopleGetter.next().value)
allPeople.push(peopleGetter.next().value)
allPeople.push(peopleGetter.next().value)
allPeople.push(peopleGetter.next().value)

var getBocaPeople = function(people) {
  var bocaPeople = []
  for (var i = 0; i < people.length; i++) {
    var person = people[i];
    if (person.city === 'Boca') {
      bocaPeople.push(person);
    }
  }
  return bocaPeople;
}

var bocaPeople = getBocaPeople(allPeople)

bocaPeople.forEach(p => {
  console.log(p.name + " lives in " + p.city);
})
