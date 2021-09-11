for (let index = 0; index < 4; index += 1) {
  const locaCor = document.querySelectorAll('.color')[index];
  if (index === 0) {
    locaCor.style.backgroundColor = 'black';
  } else if (index === 1) {
    locaCor.style.backgroundColor = 'blue';
  } else if (index === 2) {
    locaCor.style.backgroundColor = 'orange';
  } else if (index === 3) {
    locaCor.style.backgroundColor = 'green';
  }
}

function div() {
  const creatDiv = document.createElement('div');
  creatDiv.className = 'pixel';
  return creatDiv;
}

const paiPixel = document.querySelector('#pixel-board');

function criaDivs() {
  for (let index = 0; index <= 24; index += 1) {
    paiPixel.appendChild(div());
  }
}
criaDivs();

const blackLoca = document.querySelector('.color');
blackLoca.className = 'color selected';

const paletaDeCores = document.querySelector('#color-palette');
const corDaPaleta = paletaDeCores.children;

function selecionar(evento) {
  for (const lista of corDaPaleta) {
    for (const index of lista.classList) {
      if (index === 'selected') {
        lista.classList.remove('selected');
      }
    }
  }
  evento.target.classList.add('selected');
}
for (const lista of corDaPaleta) {
  lista.addEventListener('click', selecionar);
}

let armaCor = 'black';
function selecionarCor(evento) {
  armaCor = evento.target.style.backgroundColor;
  console.log(armaCor);
}
for (const lista of corDaPaleta) {
  lista.addEventListener('click', selecionarCor);
}

const filhoPixel = paiPixel.children;

function mudarCor(evento) {
  if (armaCor === 'black') {
    evento.target.classList.add('black');
  } else if (armaCor === 'blue') {
    evento.target.classList.add('blue');
  } else if (armaCor === 'orange') {
    evento.target.classList.add('orange');
  } else if (armaCor === 'green') {
    evento.target.classList.add('green');
  }
}
for (let lista of filhoPixel) {
  lista.addEventListener('click', mudarCor);
}

function remove() {
 for (const lista of filhoPixel) {
    lista.classList.remove('black');
    lista.classList.remove('blue');
    lista.classList.remove('orange');
    lista.classList.remove('green');
 }
}

const buttun = document.querySelector('button');
buttun.addEventListener('click', remove);
