let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];

const ul = document.querySelector("ul")

const paintingsList = document.querySelector('.list-paintings');
const figuresList = document.querySelector('.list-figures');

for (let i = 0; i < itens.length; i++) {
  const item = itens[i];
  const li = document.createElement('li');
  
  const img = document.createElement('img');
  img.src = item.image;
  li.appendChild(img);
  
  const h3 = document.createElement('h3');
  h3.innerText = item.name;
  li.appendChild(h3);
  
  const span = document.createElement('span');
  span.innerText = item.price;
  li.appendChild(span);
  
  if (item.type === 'Painting') {
    paintingsList.appendChild(li);
  } else if (item.type === 'Action Figures') {
    figuresList.appendChild(li);
  }
}
