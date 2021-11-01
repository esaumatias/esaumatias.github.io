const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesId = [];
  for (let index = 0; index < ids.length; index += 1) {
    data.species.filter((value) => {
      if (value.id === ids[index]) {
        return speciesId.push(value);
      }
      return speciesId;
    });
  }
  return speciesId;
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce' , 'e8481c1d-42ea-4610-8e11-1752cfc05a46',));

module.exports = getSpeciesByIds;
