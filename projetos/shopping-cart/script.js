const classCartItems = document.querySelector('.cart__items');
const carregandoPag = document.querySelector('.loading');
const buttonClick = document.querySelector('.empty-cart');
const cartItems = [];
let sumPrice = 0;

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getSkuFromProductItem(item) {
  
}

function cartItemClickListener(event) {
  event.target.remove();
}

function clearAllCar() {
  function clear() {
    classCartItems.innerText = '';
  }
  buttonClick.addEventListener('click', clear);
}

function createCartItemElement({ sku, name, salePrice, image }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.addEventListener('click', (event) => cartItemClickListener(event));
  classCartItems.appendChild(li);
  const text =` SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`
  li.appendChild(createCustomElement('img', 'item_img')).src = image;
  li.appendChild(createCustomElement('p', 'item_text')).innerText = text;
}

const divPriceTotal = () => {
  const divContainer = document.querySelector('.price');
  const divPrice = document.createElement('div');
  divPrice.classList.add('total-price');
  divContainer.appendChild(divPrice);
};

function priceTotal(price) { 
  const div = document.querySelector('.total-price');
  const atual = (sumPrice += price).toPrecision();
  div.innerText = atual;
}

async function adicionaCar(sku) {
  const itemSection = document.querySelector('.cart__items'); 
  const data = await fetchItem(sku);
  const itemObject = {
    sku: data.id,
    name: data.title,
    salePrice: data.price,
    image: data.thumbnail,
  };
    const section = createCartItemElement(itemObject);
    itemSection.appendChild(section);
}

function createProductItemElement({ sku, name, image, salePrice }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', () => {
    adicionaCar( sku );
    cartItems.push({ sku, name, salePrice, image });
    saveCartItems(JSON.stringify(cartItems));
    priceTotal(salePrice);
  });
  
  clearAllCar();
  section.appendChild(button);
  return section;
}

async function carregaProdutos(produto) {
  const data = await fetchProducts(produto);
  const itemSection = document.querySelector('.items'); 
  data.results.forEach((item) => {
   const itemObject = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
      salePrice: item.price,
    };
    const card = createProductItemElement(itemObject);
    itemSection.appendChild(card);
    carregandoPag.remove();
  });
}

const getFromLocalStorage = () => {
  const itemsList = JSON.parse(getSavedCartItems());
  if (itemsList) {
    itemsList.forEach((item) => {
      createCartItemElement(item);
    });
  }
};

function apagaStorage() {
    const div = document.querySelector('.total-price');
    div.innerHTML = 0;
    sumPrice = 0;
    const findElement = cartItems.find((item) => item.sku === sku);
    const findIndexOfElement = cartItems.indexOf(findElement);
    cartItems.splice(findIndexOfElement, 0);
    saveCartItems(JSON.stringify(cartItems));
}

window.onload = () => { 
  carregaProdutos('computador');
  divPriceTotal();
  getFromLocalStorage();
  buttonClick.addEventListener('click', apagaStorage);
};
