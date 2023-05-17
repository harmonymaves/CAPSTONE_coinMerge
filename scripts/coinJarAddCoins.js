function getEmptyCells() {
  const allCells = document.getElementsByClassName("tdCoinSpace");
  let emptyCells = [];

  for (i=0; i < allCells.length; i++) {

    if (allCells[i].firstChild.className == "noCoin") {
      emptyCells.push(allCells.item(i));
    }
  }

  return emptyCells;
} // end getEmptyCells function

function populateEmptySpace() {

  // get a list of empty cells using the getEmptyCells function

  const emptyCells = getEmptyCells();

  // only do the rest if number of empty cells is >0
  if (emptyCells.length > 0) {

    let numberOfCellsToPopulate = randomInt(1, 3);

    // if the number of empty cells is <3, generate a number 1 to that number.
    // otherwise generate a number 1-3.
    
    if (emptyCells.length < 3) {
      numberOfCellsToPopulate = randomInt(1, emptyCells.length);
    }
    
    // for the number of cells to populate:
    // get that specific cell (td)
    // change it's image to be a penny
    // change the class to coin, because it now has a coin (not empty aka noCoin)
    // changing the class will also update the CSS to actually display the image.

    for (i = 0; i < numberOfCellsToPopulate; i++) {
      let cellToChange = emptyCells[randomInt(0, emptyCells.length - 1)];
      let imgToChange = cellToChange.firstChild;

      // Generate random number 0-99 (100 outcomes)
      // 75% 1-2 penny
      // 15% 3-4 penny
      // 8% 1 nickel
      // 1% 1 dime
      // 1% 2 dimes
      let random = randomInt(0, 99);
      let coinToPlace = new CoinPile("penny", 1);
      if (random <= 74) {
        coinToPlace.type = "penny";
        coinToPlace.count = randomInt(1,2);
      } else if (random <= 89) {
        coinToPlace.type = "penny";
        coinToPlace.count = randomInt(3,4);
      } else if (random <= 97) {
        coinToPlace.type = "nickel";
        coinToPlace.count = 1;
      } else {
        coinToPlace.type = "dime";
        coinToPlace.count = randomInt(1,2);
      }

      if(coinDecorActive != "no") {
        imgToChange.src = `images/${coinDecorImagePath("image")}/${coinToPlace.getImageName()}`;
        imgToChange.className = `coin ${coinDecorActive}`;
      } else {
        imgToChange.src = `images/${coinToPlace.getImageName()}`;
        imgToChange.className = "coin";
      }
      cellToChange.dataset.type = coinToPlace.type;
      cellToChange.dataset.count = coinToPlace.count;
    }
    playSound("jarSpawn");
  } // end if emptyCells is > 0

} // end populateEmptySpace function

function eraseCoin() {
  coinBoard.style = `cursor: auto;`; 
  customerCoins.style = `cursor: auto;`;
  heldCoin = null; 
  heldCoinTd = null;
  playSound("jarDrop");
} // end eraseCoin

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returningPlayerChecker() {
  if(returningPlayer == false) { // Implemented to stop returning players from having their board populating
    populateEmptySpace();
  }
}

window.addEventListener("load", returningPlayerChecker);
document.getElementById("coinBtn").addEventListener("click", function() {
  if (heldCoin != null) {
    // a coin is held, delete it
    eraseCoin();
  } else {
    populateEmptySpace();
  }
});