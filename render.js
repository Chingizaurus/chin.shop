let wallet = 1000;
const header = document.querySelector("header");



/**
 * 
 * @param {{
 * title: String,
 * id:number,
 * category: String,
 * cost: number
 * }} item 
 * @param {HTMLElement} target 
 */

function renderItem(item, target) {
    const card = document.createElement("div");
    card.classList.add("card");



    const cardContent = `
            <h2>${item.title}</h2>
            <h3>Категория: ${item.category}</h3>
            <h4> Цена: ${item.cost}</h4>
    `
    card.innerHTML = cardContent;

    const input = document.createElement('input');
    input.type = "number";
    input.value = 1;

    const button = document.createElement("button");
    button.dataset.id = item.id;
    button.dataset.amount = input.value;
    button.innerText = "Купить"
    input.onchange = () => {
        button.dataset.amount = input.value;
    }
    card.append(input);
    card.append(button)
    target.append(card);
}


function renderWallet() {
    header.innerHTML = `
    <h1>Кошелек: ${wallet}</h1>
    `
}





