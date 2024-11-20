const shop = []



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
        id: 0
    },
    {
        title: "Dog",
        category: 3,
        id: 1
    },
    {
        title: "Mana",
        category: 2,
        id: 2
    },
    {
        title: "Chainmail",
        category: 1,
        id: 3
    },
    {
        title: "Bastard",
        category: 0,
        id: 4
    },
    {
        title: "Cat",
        category: 3,
        id: 5
    },
    {
        title: "Health",
        category: 2,
        id: 6
    }]

function buildShop() {
    categories.forEach(itemCategories => {
        newObject = {
            category: itemCategories.title,
            pool: [],
            id: shop.length
        }
        box.forEach(itemBox => {
            if (itemBox.category == itemCategories.id)
                newObject.pool.push(itemBox)
        }
        )
        shop.push(newObject)
    })
    console.log (shop)
}

function addItem(id, title, cost) {
    extraItem = {
        title: title,
        category: id,
        id: box.length,
        cost: cost
    }
box.push(extraItem)
console.log(box)
buildShop()
}
addItem (2, "Poison", 8)




/*
categories.forEach(itemCategories => {
    newObject = {
        category: itemCategories.title,
        pool: [],
        id: shop.length
    }
    box.forEach(itemBox => {
        if (itemBox.category == itemCategories.id)
            newObject.pool.push(itemBox)
    }
    )
    shop.push(newObject)
})



function buyItem(id) {
    let isFinded = 0

    box.forEach(boxItem => {
        if (id == boxItem.id && isFinded == 0) {
            console.log(boxItem.title)
            isFinded++;
        }
    })
    if (isFinded == 0)
        console.log(`Прости путник, мы таким говном под номером ${id} не торгуем`)

}

function addItem(id, title,) {

 

}






/*
let novObject = {}
categories.forEach(item => {

    novObject = {
        category: item.title,
        pool: []
    }
    shop.push(novObject)
})



shop.forEach(itemShop => {

    let boxCat

    categories.forEach(itemCategories => {
        box.forEach(itemBox => {
            if (itemBox.category == itemCategories.id)
                boxCat = itemCategories.title
            if (boxCat == itemShop.category)
                itemShop.pool.push(itemBox)
        })
    }
    )
})
    */
