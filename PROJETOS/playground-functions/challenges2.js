// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  let lista = [];
  if (tech === 0) return 'Vazio!';
  if (tech.length === 0) return 'Vazio!';
  for (let i = 0; i < tech.length; i += 1) {
    lista[i] = { tech: tech[i], name };
  }
  return lista;
}
// Desafio 11
function generatePhoneNumber(array) {
  
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
