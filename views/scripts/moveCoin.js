var heldCoin; //represents coin being "held" by cursor
var heldCoinTd; // stores the table cell the coin came from

// listen for board space to be clicked on by div tags
let coinBoard = document.getElementById('coinBoard');

function coinClicked(td) {
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
            coinBoard.style = `cursor: url(public/images/cursor${heldCoin.imageName}), auto;`;
        } else { //already have a coin in heldCoin
            // TODO: implement merge function
            // for now, merge always fails

            coinBoard.style = `cursor: auto;`; //turns the cursor back into pointer

            heldCoinTd.firstChild.className = "coin"; // reset CSS of heldCoin's td
            heldCoin = null; // resets var to not holding a coin
            heldCoinTd = null;
        }

    } else { // there is no coin in the space
        if (heldCoin != null) { // and we are holding a coin
            
            // place coin, update image, className, and src, then update td cound and type
            img.src = `public/images/${heldCoin.imageName}`; // change image tag src to be held coin image
            img.className = 'coin'; // update img tag to show image again

            td.dataset.type = heldCoin.type; // coin's data to the td
            td.dataset.count = heldCoin.count; // coin's numeric amount to the td

            // clear the coin from the cursor because it's no longer being held
            coinBoard.style = `cursor: auto;`;

            // reset the variables for holding coins
            heldCoin = null;
            heldCoinTd = null;

            console.log("Placed coin"); // for debug, TODO: remove for production
        }
    }
}

// all spaces need the onClick event
allCells = document.getElementsByClassName('tdCoinSpace');

for (i = 0; i < allCells.length; i++) {
    let cell = allCells[i];
    cell.addEventListener('click', function() {
        coinClicked(cell);
    });
}
