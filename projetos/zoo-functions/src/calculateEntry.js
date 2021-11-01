const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants1) {
  // seu código aqui
  const child = entrants1.filter(({ age }) => age < 18).length;
  const adult = entrants1.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants1.filter(({ age }) => age >= 50).length;
  return ({ child, adult, senior });
}

function calculateEntry(entrants2) {
  // seu código aqui
  if (entrants2 === undefined || Object.keys(entrants2).length === 0) {
    return 0;
  }
  const child = countEntrants(entrants2).child * data.prices.child;
  const adult = countEntrants(entrants2).adult * data.prices.adult;
  const senior = countEntrants(entrants2).senior * data.prices.senior;
  const precoTotal = child + adult + senior;
  return precoTotal;
}

console.log(countEntrants(entrants));

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
