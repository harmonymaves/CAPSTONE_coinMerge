// Local Storage Keys & Purpuse:
//
// gameBoard -> save gameboard layout
// points -> their total points ||| Coming soon
// items -> items they own in shop ||| Coming soon
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const loadnSavePopUpClose = document.getElementById("loadnSavePopUp");
const tdCoinSpace = document.querySelectorAll(".tdCoinSpace");

function saveGame() {
  if (typeof(Storage) !== "undefined") { // Is localStorage supported?
      // Note: will override any previous saved data... saving data now...
      var custDataTables = "";
      var dataTables = "";
      tdCsCoinSpace.forEach(function(currentValue, currentIndex) { // For the customer grid
        if(currentValue.firstChild.className != "noCoin") { // Something is there, save the data
          custDataTables = custDataTables.concat(String(currentIndex), ",", currentValue.getAttribute('data-type'), ",", currentValue.getAttribute('data-count'), ",");
        }
      });
      tdCoinSpace.forEach(function(currentValue, currentIndex) { // For the gameBoard
      if(currentValue.firstChild.className != "noCoin") { // Something is there, save the data
          dataTables = dataTables.concat(String(currentIndex), ",", currentValue.getAttribute('data-type'), ",", currentValue.getAttribute('data-count'), ",");
        }
      });
      console.log("DataTables Saved:\nCustomer: " + custDataTables.split(",") + "\nGameBoard: " + dataTables.split(",")); // View of what was added
      localStorage.setItem('custBoard', custDataTables);
      localStorage.setItem('gameBoard', dataTables);
      alert("Game Saved!");
  } else {
    alert("Game Progress Can Not Be Saved/Loaded. Please upgrade browser."); // Let the child know game can't be saved
  }
  loadnSavePopUpClose.style.visibility = "hidden"; // Close the popup for convience
}

function loadGame() {
  if (typeof(Storage) !== "undefined") { // Is localStorage supported?
    if ((localStorage.getItem("gameBoard") === null || localStorage.getItem("gameBoard") === "") || (localStorage.getItem("custBoard") === null || localStorage.getItem("custBoard") === "")) { // Doesn't exist
      alert("Can not load data. No saved game on this device.");
    } else { // Exists -> load data
      clearCustBoard(); // Clear the cust board before loading data
      clearBoard(); // Clear the board before loading data so it matches exactly with the load
      function updateBoard(splitCells, tdLocation) {
        splitCells = splitCells.substring(0, splitCells.length-1);
        splitCells = splitCells.split(",");

        for(let i = 0; i < splitCells.length; i++) { // Loops through all gathered data
          let type = tdLocation[parseInt(splitCells[i])].dataset.type = splitCells[i+1]; // Set type
          let count = tdLocation[parseInt(splitCells[i])].dataset.count = splitCells[i+2]; // Set count
          var addingCoin = new coinPile(type, count); // Make the coin apart of the coinPile class
          tdLocation[parseInt(splitCells[i])].firstChild.setAttribute("src", "images/" + addingCoin.getImageName()); // Autogen it's image
          tdLocation[parseInt(splitCells[i])].firstChild.className = "coin"; // Fixing the img class to update css
          console.log(addingCoin.toString()); //See what loaded
          i += 2;
        }
      }
      updateBoard(localStorage.getItem("custBoard"), tdCsCoinSpace);
      updateBoard(localStorage.getItem("gameBoard"), tdCoinSpace);
      // // Custboard Section
      // var splitCells = localStorage.getItem("custBoard");

      // // Gameboard Section
      // splitCells = localStorage.getItem("gameBoard");
      // splitCells = splitCells.substring(0, splitCells.length-1);
      // splitCells = splitCells.split(",");
      
      // for(let i = 0; i < splitCells.length; i++) { // Loops through all gathered data
      //   let type = tdCoinSpace[parseInt(splitCells[i])].dataset.type = splitCells[i+1]; // Set type
      //   let count = tdCoinSpace[parseInt(splitCells[i])].dataset.count = splitCells[i+2]; // Set count
      //   var addingCoin = new coinPile(type, count); // Make the coin apart of the coinPile class
      //   tdCoinSpace[parseInt(splitCells[i])].firstChild.setAttribute("src", "images/" + addingCoin.getImageName()); // Autogen it's image
      //   tdCoinSpace[parseInt(splitCells[i])].firstChild.className = "coin"; // Fixing the img class to update css
      //   console.log(addingCoin.toString()); //See what loaded
      //   i += 2;
      // }
      alert("Game Loaded!");
    }
  } else {
    alert("Game Progress Can Not Be Saved/Loaded. Please upgrade browser."); // Let the child know game can't be saved
  }
  loadnSavePopUpClose.style.visibility = "hidden"; // Close the popup for convience
}

function clearCustBoard() {
  // for each td tag on the board, call the clearCell function
  for (i = 0; i < tdCsCoinSpace.length; i++) {
    let cell = tdCsCoinSpace[i]; // the cell currently worked on

    clearCell(cell);
  }

  heldCoin = null;
  heldCoinTd = null;
  coinBoard.style = `cursor: auto;`; //turns the cursor back into pointer
}

saveBtn.addEventListener("click", saveGame); // Child wants to save game
loadBtn.addEventListener("click", loadGame); // Child wants to load game
