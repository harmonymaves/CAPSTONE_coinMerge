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
      var dataTables = "";
      tdCoinSpace.forEach(function(currentValue, currentIndex) {
      if(currentValue.firstChild.className != "noCoin") {
          dataTables = dataTables.concat(String(currentIndex), ",", currentValue.getAttribute('data-type'), ",", currentValue.getAttribute('data-count'), ",");
        }
      });
      console.log("DataTables Saved: " + dataTables.split(",")); // View of what was added
      localStorage.setItem('gameBoard', dataTables);
      alert("Game Saved!");
  } else {
    alert("Game Progress Can Not Be Saved/Loaded. Please upgrade browser."); // Let the child know game can't be saved
  }
  loadnSavePopUpClose.style.visibility = "hidden"; // Close the popup for convience
}

function loadGame() {
  if (typeof(Storage) !== "undefined") { // Is localStorage supported?
    if (localStorage.getItem("gameBoard") === null) { // Doesn't exist
      alert("Can not load data. No saved game on this device.");
    } else { // Exists -> load data
      clearBoard(); // Clear the board before loading data so it matches exactly with the load
      var splitCells = localStorage.getItem("gameBoard");
      splitCells = splitCells.substring(0, splitCells.length-1);
      splitCells = splitCells.split(",");
      
      for(let i = 0; i < splitCells.length; i++) { // Loops through all gathered data
        let type = tdCoinSpace[parseInt(splitCells[i])].dataset.type = splitCells[i+1]; // Set type
        let count = tdCoinSpace[parseInt(splitCells[i])].dataset.count = splitCells[i+2]; // Set count
        var addingCoin = new coinPile(type, count); // Make the coin apart of the coinPile class
        tdCoinSpace[parseInt(splitCells[i])].firstChild.setAttribute("src", "images/" + addingCoin.getImageName()); // Autogen it's image
        tdCoinSpace[parseInt(splitCells[i])].firstChild.className = "coin"; // Fixing the img class to update css
        console.log(addingCoin.toString()); //See what loaded
        i += 2;
      }
      alert("Game Loaded!");
    }
  } else {
    alert("Game Progress Can Not Be Saved/Loaded. Please upgrade browser."); // Let the child know game can't be saved
  }
  loadnSavePopUpClose.style.visibility = "hidden"; // Close the popup for convience
}

saveBtn.addEventListener("click", saveGame); // Child wants to save game
loadBtn.addEventListener("click", loadGame); // Child wants to load game