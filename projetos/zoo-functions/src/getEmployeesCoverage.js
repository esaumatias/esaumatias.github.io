const data = require('../data/zoo_data');

const { species, employees } = data;

const verificaItens = (options) => {
  const ScanFist = employees.map((value) => value.firstName);
  const scanLast = employees.map((value) => value.lastName);
  const scanId = employees.map((value) => value.id);
  if (ScanFist.includes(options) || scanLast.includes(options) || scanId.includes(options)) {
    return true;
  }
  return false;
};

const getInfos = (info) => employees.find((value) => {
  const { firstName, lastName, id } = value;
  return firstName === info || lastName === info || id === info;
});

const getSpecies = (info) => info.map((value) => {
  const animal = species.find((ani) => ani.id === value);
  return animal.name;
});

const getLocal = (locais) => locais.map((value) => {
  const local = species.find((animal) => animal.name === value);
  return local.location;
});

const getAllInfos = () => employees.map((value) => {
  const { firstName, lastName, id, responsibleFor } = value;
  const fullName = `${firstName} ${lastName}`;
  return {
    id,
    fullName,
    species: getSpecies(responsibleFor),
    locations: getLocal(getSpecies(responsibleFor)),
  };
});

function getEmployeesCoverage(options = 'undefined') {
  const info = Object.values(options).join('');
  if (options === 'undefined') {
    return getAllInfos();
  }
  if (!verificaItens(info)) throw new Error('Informações inválidas');
  const employe = getInfos(info);
  const { firstName, lastName, id, responsibleFor } = employe;
  const fullName = `${firstName} ${lastName}`;
  return {
    id,
    fullName,
    species: getSpecies(responsibleFor),
    locations: getLocal(getSpecies(responsibleFor)),
  };
}

module.exports = getEmployeesCoverage;
