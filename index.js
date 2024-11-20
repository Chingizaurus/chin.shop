renderWallet(); //Wallet render function
//You can use variable name "wallet" to decreace value if you need

const main = document.querySelector('main');
const footer = document.querySelector('footer');
let bag = []
let categories = []
let box = [];


getCat();
getData();

async function setCat(data) {
    let response = await fetch('http://localhost:3000/cat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
}


async function setData(data) {
    let response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
}


async function getData() {
    const response = await fetch('http://localhost:3000/data');
    if (response.status == 200) {
        box = await response.json();
        renderization();

    }
}

async function getCat() {
    const response = await fetch('http://localhost:3000/cat');
    if (response.status == 200) {
        categories = await response.json();
    }
}

function renderization() {
    categories.forEach((categoriesItem) => {
        box.forEach((boxItem, index) => {
            if (boxItem.category == categoriesItem.id) {
                renderItem({
                    title: boxItem.title,
                    cost: boxItem.cost,
                    category: categoriesItem.title,
                    id: boxItem.id
                }, main)
            }
        })
    })
}



document.querySelectorAll(".card button").forEach(item => {
    item.addEventListener("click", buyItem);
})

document.querySelectorAll(".inventory-card button").forEach(item => {
    item.addEventListener("click", sellItem);
})


function sellItem(event) {
    const id = event.target.dataset.id;



    disposeElement(id);
    renderWallet();
}

/**
 * 
 * 
 * @param {Event} event 
 */
function buyItem(event) {
    //Passed ID of item
    const data = event.target.dataset.id;
    const amount = event.target.dataset.amount;


    box.forEach(boxItem => {
        let count = 0
        if (data == boxItem.id && wallet >= boxItem.cost * amount) {
            wallet = wallet - boxItem.cost * amount
            bag.push(boxItem)
            count++
        }
        if (data == boxItem.id && wallet < boxItem.cost * amount && count == 0) {
            console.log("А ну, пшел нах отседова, бомжара босоногая! Нет денег, нет товаров!")
        }
    })
    /**
     * implement logic here
     */

    console.log(bag)
    //to get reactivity you need to rerender html elements
    renderWallet();
}
