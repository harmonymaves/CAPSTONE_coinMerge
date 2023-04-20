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
let pennies = document.querySelectorAll("span");
let chosenCoin = {
    coinId: -1,
    indexOfBoardPiece: -1
}

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
}

function resetSelectedCoinProperties() {
    chosenCoin.coinId = -1;
    chosenCoin.coinId = -1;
    
}

function getSelectedCoin() {
    chosenCoin.coinId = parseInt(event.target.id);
    chosenCoin.indexOfBoardPiece = findCoin(chosenCoin.coinId);
}

let findCoin = function (coinId) {
    let parsed = parseInt(coinId);
    return board.indexOf(parsed);
};

function checkAvailableSpaces() {
    
}

    coinEventListeners();
}