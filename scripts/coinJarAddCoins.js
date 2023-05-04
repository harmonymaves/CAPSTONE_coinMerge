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
      let cellToChange = emptyCells[randomInt(0, emptyCells.length)];
      let imgToChange = cellToChange.firstChild;
      imgToChange.src = "images/penny1.png";
      imgToChange.className = "coin";
      cellToChange.dataset.type = "penny";
      cellToChange.dataset.count = 1;
    }

  } else {
    console.log("There's no more room!")

  } // end if emptyCells is > 0

} // end populateEmptySpace function

function randomInt(min, max) {
  return Math.floor(Math.random() * max + min);
}

function returningPlayerChecker() {
  if(returningPlayer == false) { // Implemented to stop returning players from having their board populating
    populateEmptySpace();
  }
}

window.addEventListener("load", returningPlayerChecker);
document.getElementById("coinBtn").addEventListener("click", populateEmptySpace);