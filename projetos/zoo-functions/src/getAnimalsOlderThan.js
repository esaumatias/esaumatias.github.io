const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalId = data.species.filter((value) => value.name === animal);
  const { residents } = animalId[0];
  const verificaAge = residents.every((value) => value.age >= age);
  return verificaAge;
}
// console.log(getAnimalsOlderThan('lions', 20));
module.exports = getAnimalsOlderThan;
