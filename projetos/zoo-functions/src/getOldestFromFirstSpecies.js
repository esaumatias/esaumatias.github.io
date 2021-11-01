const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  let animalMaisVelho = [{ age: 1 }];
  const verificaId = employees.filter((value) => value.id === id)
    .map((value) => value.responsibleFor[0]);
  const returnAniamais = species.filter((value) => value.id === verificaId[0])
    .map((value) => value.residents);
  for (let index = 0; index < returnAniamais[0].length; index += 1) {
    if (animalMaisVelho[0].age < returnAniamais[0][index].age) {
      animalMaisVelho = returnAniamais.map((value) => value[index]);
    }
  }
  return Object.values(animalMaisVelho[0]);
}

module.exports = getOldestFromFirstSpecies;
