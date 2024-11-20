renderWallet(); //Wallet render function
//You can use variable name "wallet" to decreace value if you need

const main = document.querySelector('main');
const footer = document.querySelector('footer');
let bag =[]
const categories = [
    {
        id: 0,
        title: "Swords",
    },
    {
        id: 1,
        title: "Бронька",
    },
    {
        id: 2,
        title: "Potions",
    },
    {
        id: 3,
        title: "Pets",
    }
]


const box = [
    {
        title: "Gladius",
        category: 0,
        id: 0,
        cost: 500
    },
    {
        title: "Dog",
        category: 3,
        id: 1,
        cost:11
    },
    {
        title: "Mana",
        category: 2,
        id: 2,
        cost: 3
    },
    {
        title: "Chainmail",
        category: 1,
        id: 3,
        cost:18
    },
    {
        title: "Bastard",
        category: 0,
        id: 4,
        cost:24
    },
    {
        title: "Cat",
        category: 3,
        id: 5,
        cost:3
    },
    {
        title: "Health",
        category: 2,
        id: 6,
        cost:5
    }]

renderization();

function renderization(){
categories.forEach((categoriesItem) => {
    box.forEach((boxItem,index) =>{
        if (boxItem.category == categoriesItem.id)
        {
            renderItem({
                title: boxItem.title,
                cost: boxItem.cost,
                category: categoriesItem.title,
                id: boxItem.id
            },main)
        }
    })
})}



document.querySelectorAll(".card button").forEach(item=>{
    item.addEventListener("click",buyItem);
})

/**
 * 
 * 
 * @param {Event} event 
 */
function buyItem(event) {
    //Passed ID of item
    const data = event.target.dataset.id;
    const amount = event.target.dataset.amount;

    
    box.forEach(boxItem =>{
        let count = 0
        if (data == boxItem.id && wallet >= boxItem.cost * amount)
           { wallet = wallet - boxItem.cost * amount
            bag.push(boxItem)
            count++
            }
            if (data == boxItem.id && wallet < boxItem.cost * amount && count == 0)
            {
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
