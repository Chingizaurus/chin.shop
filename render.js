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
    const el = document.createElement("div");
    const cardContent = `
        <div  class="card">
            <h2>${item.title}</h2>
            <h3>Категория: ${item.category}</h3>
            <h4> Цена: ${item.cost}</h4>
            <input value="1" type="number">
            <button data-id="${item.id}">Купить</button>
        </div>
    `
    el.innerHTML = cardContent;
    target.append(el);
}


function renderWallet() {
    header.innerHTML = `
    <h1>Кошелек: ${wallet}</h1>
    `
}





