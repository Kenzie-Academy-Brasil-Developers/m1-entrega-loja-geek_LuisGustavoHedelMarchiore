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

const paintingTag = document.getElementsByClassName("paintings")[0];
const actionTag = document.getElementsByClassName("action")[0];

for (let i = 0; i < itens.length; i++) {
    const userCard = document.createElement("li") 
    userCard.id = itens[i].name; 
 
    userCard.className = "userCard" 
 
    const userImage = document.createElement("img"); 
    userImage.src = itens[i].image; 
    userCard.appendChild(userImage) 
 
    const usernameText = document.createElement("h2") 
    usernameText.innerText = itens[i].name; 
 
    userCard.appendChild(usernameText); 
 
    const followingIten = document.createElement("span"); 
    followingIten.innerText = itens[i].price; 
    userCard.appendChild(followingIten); 
  
  if (itens[i].type === "Painting") {
    paintingTag.appendChild(userCard);
  } else if (itens[i].type === "Action Figures") {
    actionTag.appendChild(userCard);
  }
}