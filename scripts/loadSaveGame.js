// Local Storage Keys & Purpuse:
//
// gameBoard -> save gameboard layout
// custBoard -> save custboard layout
// points -> their total points
// shopItems -> items they own in shop
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const loadnSavePopUpClose = document.getElementById("loadnSavePopUp");
const tdCoinSpace = document.querySelectorAll(".tdCoinSpace");
//var scoreAreaLC = document.getElementById("scoreArea");
var returningPlayer = false;
var coinDecorActive = "no";

/*
   Important Notice: Players who's devices don't support
   autosave/autoload WILL NOT be notified about their data 
   not being saved/loaded. Reason behind this: players data
   will save for every click they do, therefore if an else
   runs for every click they do, they will be notified
   every move they make in the game that their data isn't
   saved. That's not okay! As for load, they will just
   enter the game like a new player since data can't be
   loaded.
*/

function saveGame(tdLocation, localStorageName) { // String, Nodelist, String
  var saveDataIn = "";
  tdLocation.forEach(function(currentValue, currentIndex) { // For the customer grid
    if(currentValue.firstChild.className != "noCoin") { // Something is there, save the data
      saveDataIn = saveDataIn.concat(String(currentIndex), ",", currentValue.getAttribute('data-type'), ",", currentValue.getAttribute('data-count'), ",");
    }
  });
  localStorage.setItem(localStorageName, saveDataIn);
  returningPlayer = true; // They are a returning player (stops auto coins from spawning)
}

function loadGame(tdLocation, localstrName) { // String, Nodelist
  if (localStorage.getItem(localstrName) != null && localStorage.getItem(localstrName) != "") { // Exists, so load
    var saveDataIn = localStorage.getItem(localstrName);
    saveDataIn = saveDataIn.substring(0, saveDataIn.length-1);
    saveDataIn = saveDataIn.split(",");

      for(let i = 0; i < saveDataIn.length; i++) { // Loops through all gathered data
        let type = tdLocation[parseInt(saveDataIn[i])].dataset.type = saveDataIn[i+1]; // Set type
        let count = tdLocation[parseInt(saveDataIn[i])].dataset.count = saveDataIn[i+2]; // Set count
        var addingCoin = new CoinPile(type, count); // Make the coin apart of the CoinPile class
        tdLocation[parseInt(saveDataIn[i])].firstChild.setAttribute("src", "images/" + addingCoin.getImageName()); // Autogen it's image
        tdLocation[parseInt(saveDataIn[i])].firstChild.className = "coin"; // Fixing the img class to update css
        i += 2;
      }
      returningPlayer = true; // They are a returning player (stops auto coins from spawning)
    }
}
function savePoints() {
  localStorage.setItem("points", String(document.getElementById("scoreArea").textContent));
}
function loadPoints() {
  if(localStorage.getItem("points") != null && localStorage.getItem("points") != "") { // Exists, so load
    document.getElementById("scoreArea").innerHTML = parseInt(localStorage.getItem("points"));
    totalScore = parseInt(localStorage.getItem("points"));
    updateScore(totalScore);
  } else {
    document.getElementById("scoreArea").innerHTML = 0;
    totalScore = 0;
    updateScore(totalScore);
  }
}
function saveShopItems() {
  var saveDataIn = "";
  var shopTD = document.querySelectorAll(".shopTD");
   shopTD.forEach(function(currentValue, currentIndex) { // For the shop
    // Sadly have to do long way to check class, text in shopTD counts as childern :(
    if((currentValue.lastChild.previousSibling.firstChild.className == "unlocked" || currentValue.lastChild.previousSibling.firstChild.className == "equipped") 
    && (currentValue.lastChild.previousSibling.firstChild.innerHTML == "Equip Me" || currentValue.lastChild.previousSibling.firstChild.innerHTML == "Equipped")) { // Something is there, save the data
      saveDataIn = saveDataIn.concat(String(currentIndex), ":");
      saveDataIn = saveDataIn.concat(String(currentValue.lastChild.previousSibling.firstChild.className), ":");
      saveDataIn = saveDataIn.concat(String(currentValue.lastChild.previousSibling.firstChild.innerHTML), ",");
    }
  });
  if(saveDataIn != "") {
    localStorage.setItem("shopItems", saveDataIn);
  }
}

function loadShopItems() {
  if (localStorage.getItem("shopItems") != null && localStorage.getItem("shopItems") != "") { // Exists, so load
    var shopTD = document.querySelectorAll(".shopTD");
    var saveDataIn = localStorage.getItem("shopItems");
    saveDataIn = saveDataIn.substring(0, saveDataIn.length-1);
    saveDataIn = saveDataIn.split(",");

    for(let i = 0; i < saveDataIn.length; i++) { // Loops through all gathered data
      var chopped = saveDataIn[i].split(":");
      if(String(chopped[2]) != "undefined") {
        shopTD[parseInt(chopped[0])].lastChild.previousSibling.firstChild.className = String(chopped[1]);
        shopTD[parseInt(chopped[0])].lastChild.previousSibling.firstChild.innerHTML = String(chopped[2]);
        if(chopped[1] == "equipped") {
          equippingTime(shopTD[parseInt(chopped[0])].lastChild.previousSibling);
        }
      } else { // Data was corrupted, just reset it
        shopTD[parseInt(chopped[0])].lastChild.previousSibling.firstChild.className = "locked";
        shopTD[parseInt(chopped[0])].lastChild.previousSibling.firstChild.innerHTML = "Buy Me";
      }
    }
  }
}

function autoLoad() { // Add more calls when new data needs to be autoLoaded
  if (typeof(Storage) !== "undefined") { // Is localStorage supported?
    loadGame(tdCoinSpace, "gameBoard"); // Load gameboard data
    loadGame(tdCsCoinSpace, "custBoard"); // Load custboard data
    loadPoints(); // Load points data
    loadShopItems(); // Load unlocked items
    setTimeout(function() {
      document.body.setAttribute('style', 'visibility: visibile');
    }, 100)

  } // Else data will never load + no alert rn
}
function autosave() { // Add more calls when new data needs to be autoSaved
  if (typeof(Storage) !== "undefined") { // Is localStorage supported?
    // Yes... time to autosave
    saveGame(tdCoinSpace, "gameBoard"); // Save gameboard data
    saveGame(tdCsCoinSpace, "custBoard"); // Save customerBoard data
    savePoints(); // Save points data
    saveShopItems(); // Save unlocked items
  } // Else data will never save + no alert rn
}

function coinDecorImagePath(cursorOrImage) {
  if(cursorOrImage == "cursor") {
    return `coinDecor/${coinDecorActive}/cursors`;
  } else {
    return `coinDecor/${coinDecorActive}`;
  }
}

window.addEventListener("load", autoLoad);
document.body.addEventListener("click", autosave);
