function clearBoard() {

  // get all the tds on the board.
  const cellsToClear = document.getElementsByClassName("tdCoinSpace");

  // for each td tag on the board, call the clearCell function
  for (i = 0; i < cellsToClear.length; i++) {
    let cell = cellsToClear[i]; // the cell currently worked on

    clearCell(cell);
  }

  heldCoin = null;
  heldCoinTd = null;
}


function clearCell (td) { //td is the td tag which we want to clear

  // remove data from the passed in cell, and set the class of the image to "noCoin" to hide it via CSS
  
  let cellImg = td.firstChild; // img tag of the cell we want to clear
  td.dataset.type = "";
  td.dataset.count = 0;
  cellImg.className = "noCoin";
}
// the reason I wrote a specific function for these 4 lines of code
// rather than putting them in the for loop of clearBoard() is because
// we will need to clear one cell anytime we merge coins. We can then
// call this function, passing in the specific td we want to clear
//
// for example, when we merge two piles of 1 quarter together, one of
// those quarter piles will be cleared, and the other will update it's count value
// to add the count of the other pile.

document.getElementById("resetBtn").addEventListener("click", clearBoard);