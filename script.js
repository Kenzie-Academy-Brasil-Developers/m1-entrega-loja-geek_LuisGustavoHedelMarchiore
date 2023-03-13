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

const body = document.querySelector("body");

function createElement(itens){
    const userCard = document.createElement("div")
    userCard.id = itens.name;

    userCard.className = "userCard"

    const userImage = document.createElement("img");
    userImage.src = itens.image;
    userCard.appendChild(userImage)

    const usernameText = document.createElement("span")
    usernameText.innerText = itens.name;

    userCard.appendChild(usernameText);

    const followingList = document.createElement("ul");

    const followingIten = document.createElement("p");
    followingIten.innerText = itens.price;
    followingList.appendChild(followingIten);
    
    userCard.appendChild(followingList);

    return userCard;
}

function createUsersSection(){
    const userSection = document.createElement("section");
    userSection.id = "users"

    for (let i = 0; i < itens.length; i++) {
        const card = createElement(itens[i])
        userSection.appendChild(card)
    }

   /*  const titulo = document.createElement("h1")
    titulo.innerText = "Action Figures"
    body.appendChild(titulo)
 */
/*     if (itens.type == 'Action Figures') {
        body.appendChild(userSection);
    } */

   /*  const titulo2 = document.createElement("h1")
    titulo2.innerText = "Painting"
    body.appendChild(titulo2) */

/*     if (itens.type == 'Painting') {
        body.appendChild(userSection);
    } */
    body.appendChild(userSection);
}

createUsersSection();