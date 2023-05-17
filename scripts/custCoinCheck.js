// if a coin or coin pile is dropped into the customerCoins
// WHEN coin is placed in customer space (click event)
function coinToCustomer(td) {
    let img = td.firstChild; //grab the image tag within the board square that was clicked

    if (img.className != "noCoin") { //space holds a coin
        if (heldCoin == null) { // no coin in heldCoin

            // save the coin clicked on into a var, as well as td in case coin needs to be
            // sent back to original square
            heldCoin = new CoinPile(td.dataset.type, td.dataset.count); //make new CoinPile, use td data
            heldCoinTd = td; // saves for later in case move fails

            img.className = "noCoin"; // pulls coin from view while in heldCoin

            // adds custom cursor to represent dragging coin
            if(coinDecorActive != "no") {
                coinBoard.style = `cursor: url(images/${coinDecorImagePath("cursor")}/${heldCoin.getImageName()}), auto;`;
                customerCoins.style = `cursor: url(images/${coinDecorImagePath("cursor")}/${heldCoin.getImageName()}), auto;`;
            } else {
                coinBoard.style = `cursor: url(images/cursors/${heldCoin.getImageName()}), auto;`;
                customerCoins.style = `cursor: url(images/cursors/${heldCoin.getImageName()}), auto;`;
            }
        } else {
            // make a CoinPile instance using the td clicked
            clickedCoin = new CoinPile(td.dataset.type, td.dataset.count);

            playSound("deny");
            // don't even check for a merge, just put it back where it came from
            if(coinDecorActive != "no") {
                heldCoinTd.firstChild.className = `coin ${coinDecorActive}`; // reset CSS of heldCoin's td's img, putting it back
            } else {
                heldCoinTd.firstChild.className = "coin"; // reset CSS of heldCoin's td's img, putting it back
            }
            
            coinBoard.style = `cursor: auto;`; //turns the cursor back into pointer
            customerCoins.style = `cursor: auto;`;
            heldCoin = null; // resets var to not holding a coin
            heldCoinTd = null;
        }

    } else { // there is no coin in the space
        if (heldCoin != null) { // we are holding a coin

            // place coin, update image, className, and src, then update td count and type
            if(coinDecorActive != "no") {
                img.src = `images/${coinDecorImagePath("Image")}/${heldCoin.getImageName()}`; // change image tag src to be held coin image
                img.className = `coin ${coinDecorActive}`; // update img tag to show image again
            } else {
                img.src = `images/${heldCoin.getImageName()}`; // change image tag src to be held coin image
                img.className = 'coin'; // update img tag to show image again
            }

            heldCoinTd.dataset.type = ""; // Bug fix: clear the data from the original td.
            heldCoinTd.dataset.count = 0;
            td.dataset.type = heldCoin.type; // coin's data to the td
            td.dataset.count = heldCoin.count; // coin's numeric amount to the td
            

            // clear the coin from the cursor because it's no longer being held
            coinBoard.style = `cursor: auto;`;
            customerCoins.style = `cursor: auto;`;

            // reset the variables for holding coins
            heldCoin = null;
            heldCoinTd = null;
            playSound("place");
        }
    }

   checkCoins();

}

const tdCsCoinSpace = document.querySelectorAll(".tdCsCoinSpace");

function checkCoins(td) {

    // total all three coin spaces
    let pile1Object = new CoinPile(tdCsCoinSpace[0].dataset.type, tdCsCoinSpace[0].dataset.count);
    let pile2Object = new CoinPile(tdCsCoinSpace[1].dataset.type, tdCsCoinSpace[1].dataset.count);
    let pile3Object = new CoinPile(tdCsCoinSpace[2].dataset.type, tdCsCoinSpace[2].dataset.count);
        
    let pile1 = pile1Object.getValue();
    let pile2 = pile2Object.getValue();
    let pile3 = pile3Object.getValue();

    let totalValue = pile1 + pile2 + pile3;
    
    // and check against requested amount
    if (totalValue == coinTotal) { //dev amount is 1.25
        // if matching, alert "thanks for the correct change!"
        playSound("success");
        flareHighlight();
        // alert("Thanks for the correct change!");
        totalScore = (totalScore + (totalValue * 2));        
        // that customer deletes and adds a new one

        clearCustomerBoxes();
        updateScore(totalScore);
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