var heldCoin; //represents coin being "held" by cursor
var heldCoinTd; // stores the table cell the coin came from
var mergeCounter = 0; // incrementing variable for point system first version

// listen for board space to be clicked on by div tags
let coinBoard = document.getElementById('coinBoard');
let customerCoins = document.getElementById('customerCoinBoard');
let scoreArea = document.getElementById('scoreArea');

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
            coinBoard.style = `cursor: url(images/cursors/${heldCoin.getImageName()}), auto;`;
            customerCoins.style = `cursor: url(images/cursors/${heldCoin.getImageName()}), auto;`;
        } else { //already have a coin in heldCoin
            // Coin in grid space and held, so attempt a merge

            console.log('merge entered');
            
            // make a coinPile instance using the td clicked
            clickedCoin = new coinPile(td.dataset.type, td.dataset.count);

            // if merge succeeds, update the image, clear the data from
            // the heldCoin and heldCoin's original td, as well as the heldCoinTd

            // the reason we can do the merge function as the parameter is
            // because the merge function returns a boolean, depending on
            // success or failure of the merge
            if (clickedCoin.merge(heldCoin)) { // success
                img.src = `images/${clickedCoin.getImageName()}`; // update image
                td.dataset.type = clickedCoin.type; // update td's data
                td.dataset.count= clickedCoin.count;
                heldCoinTd.dataset.type = ""; // actually remove the data from the held coin's original td
                heldCoinTd.dataset.count = 0;
                mergeCounter++; // Update the counter
                scoreArea.innerText = mergeCounter; // Display the counter
                console.log("MERGE SUCCESS!"); // TODO: REMOVE FROM PRODUCTION
            } else { // failure
                heldCoinTd.firstChild.className = "coin"; // reset CSS of heldCoin's td's img, putting it back
                console.log("Merge failure...");
            }

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

function eraseCoin(img) {
coinJar.removeEventListener('click', populateEmptySpace);
coinBoard.style = `cursor: auto;`; 
customerCoins.style = `cursor: auto;`;
heldCoin = null; 
heldCoinTd = null;
}

// Grabbing the coinBtn element
coinJar = document.getElementById("coinBtn");
// Adding onClick event to the coinBtn
coinJar.addEventListener("click", 
// Using an if to see if the event listener for creating coins needs to be turned off
function() {if (heldCoin != null) {
    eraseCoin(coinJar);
} // Making sure the event listener is being applied after erasing the coin
document.getElementById("coinBtn").addEventListener("click", populateEmptySpace);
});