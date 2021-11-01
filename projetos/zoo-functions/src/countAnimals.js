const data = require('../data/zoo_data');

const { species } = data;

function arrayAllAnimais() {
  const animalObject = {};
  const animalArray = [];
  species.forEach((specie) => {
    animalArray.push([specie.name, specie.residents.length]);
  });
  animalArray.forEach(([name, residents]) => {
    animalObject[name] = residents;
  });
  return animalObject;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return arrayAllAnimais();
  }
  const selectSpecie = (value) => value.name === animal.specie;
  const selectedSpecie = species.find(selectSpecie);
  if (animal.sex) {
    const selectGender = (sexo) => sexo.sex === animal.sex;
    const selectedGender = selectedSpecie.residents.filter(selectGender);
    return selectedGender.length;
  }
  return selectedSpecie.residents.length;
}

module.exports = countAnimals;
