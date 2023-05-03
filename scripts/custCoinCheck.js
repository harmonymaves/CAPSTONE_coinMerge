// if a coin or coin pile is dropped into the customerCoins
// WHEN coin is placed in customer space (click event)
function coinToCustomer(td) {
    let img = td.firstChild; //grab the image tag within the board square that was clicked

    if (img.className != "noCoin") { //space holds a coin
        printCoinProperties(td); // for debug, TODO: remove for production
        if (heldCoin == null) { // no coin in heldCoin

            // save the coin clicked on into a var, as well as td in case coin needs to be
            // sent back to original square
            heldCoin = new coinPile(td.dataset.type, td.dataset.count); //make new coinPile, use td data
            heldCoinTd = td; // saves for later in case move fails

            img.className = "noCoin"; // pulls coin from view while in heldCoin

            console.log("Currently holding coin: " + heldCoin); // for debug, TODO: remove for production

            // adds custom cursor to represent dragging coin
            coinBoard.style = `cursor: url(images/cursors/${heldCoin.getImageName()}), auto;`;
            customerCoins.style = `cursor: url(images/cursors/${heldCoin.getImageName()}), auto;`;
        } else {
            // make a coinPile instance using the td clicked
            clickedCoin = new coinPile(td.dataset.type, td.dataset.count);

            // don't even check for a merge, just put it back where it came from
            heldCoinTd.firstChild.className = "coin"; // reset CSS of heldCoin's td's img, putting it back
            console.log("Merge failure...");
            coinBoard.style = `cursor: auto;`; //turns the cursor back into pointer
            customerCoins.style = `cursor: auto;`;
            heldCoin = null; // resets var to not holding a coin
            heldCoinTd = null;
        }

    } else { // there is no coin in the space
        if (heldCoin != null) { // we are holding a coin

            // place coin, update image, className, and src, then update td count and type
            img.src = `images/${heldCoin.getImageName()}`; // change image tag src to be held coin image
            img.className = 'coin'; // update img tag to show image again

            td.dataset.type = heldCoin.type; // coin's data to the td
            td.dataset.count = heldCoin.count; // coin's numeric amount to the td
            heldCoinTd.dataset.type = ""; // Bug fix: clear the data from the original td.
            heldCoinTd.dataset.count = 0;

            // clear the coin from the cursor because it's no longer being held
            coinBoard.style = `cursor: auto;`;
            customerCoins.style = `cursor: auto;`;

            // reset the variables for holding coins
            heldCoin = null;
            heldCoinTd = null;

            console.log("Placed coin"); // for debug, TODO: remove for production
        }
    }

   checkCoins()

}

const tdCsCoinSpace = document.querySelectorAll(".tdCsCoinSpace");

function checkCoins(td) {

    // total all three coin spaces
    let pile1Object = new coinPile(tdCsCoinSpace[0].dataset.type, tdCsCoinSpace[0].dataset.count);
    let pile2Object = new coinPile(tdCsCoinSpace[1].dataset.type, tdCsCoinSpace[1].dataset.count);
    let pile3Object = new coinPile(tdCsCoinSpace[2].dataset.type, tdCsCoinSpace[2].dataset.count);
        
    let pile1 = pile1Object.getValue();
    let pile2 = pile2Object.getValue();
    let pile3 = pile3Object.getValue();
    console.log("p1:" + pile1 + " p2:" + pile2 + " p3:" + pile3)

    let totalValue = pile1 + pile2 + pile3;
    console.log(totalValue)
    
    // and check against requested amount
    if (totalValue == coinTotal) { //dev amount is 1.25
        // if matching, alert "thanks for the correct change!"
        alert("Thanks for the correct change!")
        // that customer deletes and adds a new one
        customerRequest();
        clearCustomerBoxes();
    }
} 

function clearCustomerBoxes() {

    const custCellsToClear = document.getElementsByClassName("tdCsCoinSpace");

    for(i = 0; i < custCellsToClear.length; i++) {
        let custCell = custCellsToClear[i];

        clearCell(custCell);
    }

}
//customer cells all need the onClick event
custCells = document.getElementsByClassName('tdCsCoinSpace');

for (i = 0; i < custCells.length; i++) {
    let cell = custCells[i];
    cell.addEventListener('click', function() {
        coinToCustomer(cell);
    });
}