const data = require('../data/zoo_data');

function isManager(id) {
  const procuraGerente = data.employees.some((employee) => employee.managers.includes(id));
  return procuraGerente;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const getManager = data.employees.filter((element) => element.managers.includes(managerId));
    return getManager.map((elements) => `${elements.firstName} ${elements.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
