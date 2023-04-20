// Three Events to moving a coin:
// 1- clicking the coin
// 2- clicking the cell it goes to
// 3- data that is changed when coin moves


// Game Board Array
const board = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20,
    21, 22, 23, 24, 25
]

// DOM references
const cells = document.querySelectorAll("td");
let pennies = document.querySelectorAll("p");
let chosenCoin = {
    coinId: -1,
    indexOfBoardPiece: -1
}

// Mini-Event One: clicking the coin
//Event listeners on each coin
function coinEventListeners() {
    for (let i = 0; i < pennies.length; i++) {
        pennies[i].addEventListener("click", selectCoin)
    }

function selectCoin() {
    removeCoinonclick();
    resetSelectedCoinProperties();
    getSelectedCoin();
}

function removeCoinonclick() {
    for(let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick");
    }
    //TODO: This is where to change the appearance of the cursor
    // to drag coin around screen
}

function resetSelectedCoinProperties() {
    chosenCoin.coinId = -1;
    chosenCoin.coinId = -1;
    
}

function getSelectedCoin() {
    chosenCoin.coinId = parseInt(event.target.id);
    chosenCoin.indexOfBoardPiece = findCoin(chosenCoin.coinId);
    console.log("Chosen Coin Id: " + chosenCoin.coinId + "\nBoard Index: " + chosenCoin.indexOfBoardPiece);
}

let findCoin = function (coinId) {
    let parsed = parseInt(coinId);
    return board.indexOf(parsed);
};



    coinEventListeners();
}