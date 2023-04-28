// if a coin or coin pile is dropped into the customerCoins
// WHEN coin is placed in customer space (click event)
function checkCoins(td) {
    if (heldCoin != null) { //cursor holds a coin
        if (img.className == 'noCoin') { // space is available in the customer box
        img.src = `images/${heldCoin.getImageName()}`;
        img.className = 'coin';

        td.dataset.type = heldCoin.type; // coin's data to the td
        td.dataset.count = heldCoin.count; // coin's numeric amount to the td

        coinBoard.style = `cursor: auto;`;
        customerCoins.style = `cursor: auto;`;

        heldCoin = null;
        heldCoinTd = null;

        console.log("Placed coin for customer");  //TODO: remove for production
        }

    }
    // total all three coin spaces
    let totalValue = coinPile1.getValue() + coinPile2.getValue() + coinPile3.getValue();


    // and check against requested amount
    if (totalValue == coinTotal) {
        // if matching, alert "thanks for the correct change!"
        alert("Thanks for the correct change!")

        // that customer deletes and adds a new one
        customerRequest();
    }
}
//customer cells all need the onClick event
custCells = document.getElementsByClassName('tdCsCoinSpace');

for (i = 0; i < custCells.length; i++) {
    let cell = custCells[i];
    cell.addEventListener('click', function() {
        coinClicked(cell);
    });
}