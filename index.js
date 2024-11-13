renderWallet(); //Wallet render function
//You can use variable name "wallet" to decreace value if you need

const main = document.querySelector('main');





/**
 * Render item example
 */
renderItem({
    title: "Bastard",
    cost: 1,
    category: "Swords",
    id: 1
}, main);

document.querySelectorAll(".card button").forEach(item=>{
    item.addEventListener("click",buyItem);
})

/**
 * 
 * @param {Event} event 
 */
function buyItem(event) {
    //Passed ID of item
    const data = event.target.dataset.id;
    const amount = event.target.dataset.amount;

    /**
     * implement logic here
     */


    //to get reactivity you need to rerender html elements
    renderWallet();
}