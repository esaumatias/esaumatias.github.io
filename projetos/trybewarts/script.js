const inputTypeEmail = document.querySelector('.inputLoginEmail');
const inputTypePass = document.querySelector('.inputLoginSenha');
const buttonHeader = document.querySelector('.buttonHeader');
const checkBox = document.querySelector('#agreement');
const getButton = document.getElementById('submit-btn');
const inputTypeTextArea = document.querySelector('#textarea');
const contadorCaracter = document.querySelector('#counter');
// Button disable  = https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
getButton.disabled = true;

function validaEmail() {
  const email = 'tryber@teste.com';
  const senha = '123456';
  const valueEmail = inputTypeEmail.value;
  const valueSenha = inputTypePass.value;

  if (valueEmail === email && valueSenha === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonHeader.addEventListener('click', validaEmail);

function enableButton() {
  // Checked = http://devfuria.com.br/javascript/manipulando-checkboxes-com-javascript/
  if (checkBox.checked) {
    getButton.disabled = false;
    getButton.style.backgroundColor = 'rgb(50, 167, 145)';
    getButton.style.color = 'white';
  } else {
    getButton.disabled = true;
    getButton.style.backgroundColor = 'white';
    getButton.style.color = 'black';
  }
}

checkBox.addEventListener('click', enableButton);

function contaLetras() {
  const valueContador = inputTypeTextArea.value.length;
  contadorCaracter.innerHTML = 500 - valueContador;
}

inputTypeTextArea.addEventListener('input', contaLetras);
