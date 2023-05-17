document.querySelectorAll(".shopbtn").forEach(occurence => { // function to grab all shop items
  occurence.addEventListener('click', function(){ // Activates click for specific button
    var currentScore = parseInt(document.getElementById("scoreArea").textContent);
    let status = occurence.firstChild.className;
    let points = parseInt(occurence.parentNode.textContent.slice(8));
    if (occurence.parentNode.id == "comingSoon") { // saving incase working on in future wants to publish midway
      alert("Sorry, item is not ready for purchase");
    } else {
      if (status == "locked") {
        if(points <= currentScore) {
          document.getElementById("scoreArea").innerHTML = (currentScore - points);
          totalScore = (currentScore - points);
          occurence.firstChild.className = "unlocked";
          occurence.firstChild.innerHTML = "Equip Me";
        } else {
          alert("Purchase Failed: Not enough points");
        }
      } else if(status == "unlocked") {
        equippingTime(occurence);
        occurence.firstChild.innerHTML = "Equipped";
        occurence.firstChild.className = "equipped";
      } else if(status == "equipped") {
        revertToDefault(occurence);
      } // Else it's messed up so don't do anything
    }
  });
});
function equippingTime(occurence) {
  EquippedMe = String(occurence.parentNode.id)
  switch(EquippedMe) {
    case "color1":
      unequipMe("color2");
      unequipMe("color3");
      equipColor("#F5926B","#C99AEC","#9FE4AD","#F9ABF5","#5BC5F5");
    break;
    case "color2":
      unequipMe("color1");
      unequipMe("color3");
      equipColor("#DB5760","#F9AD46","#A2D073","#A4DFE7","#F7ED86");
    break;
    case "color3":
      unequipMe("color1");
      unequipMe("color2");
      equipColor("#ABCC84","#F8BC79","#F7ED86","#EDCDE2","#A4DEF7");
    break;
    case "coinJar1":
      unequipMe("coinJar2");
      unequipMe("coinJar3");
      equipCoinJar(EquippedMe);
    break;
    case "coinJar2":
      unequipMe("coinJar1");
      unequipMe("coinJar3");
      equipCoinJar(EquippedMe);
    break;
    case "coinJar3":
      unequipMe("coinJar1");
      unequipMe("coinJar2");
      equipCoinJar(EquippedMe);
    break;
    case "coinDecor1":
      equipCoinDecor("coinDecor1");
      //unequipMe("coinDecor2");
    break;
    /*Coming soon
    case "coinDecor2":
      unequipMe("coinDecor1");
    break;
    */
    default:
      alert("Error Equiping");
  }
}
function revertToDefault(occurence) {
  var defaultMe = String(occurence.parentNode.id);
  unequipMe(defaultMe);
  switch(defaultMe) {
    case "color1":
    case "color2":
    case "color3":
      equipColor("#000000", "#5784b8", "#9AC8EA", "#f4cfe0", "#f5f5dc"); // Please update to new CSS default ***************
    break;
    case "coinJar1":
    case "coinJar2":
    case "coinJar3":
      equipCoinJar("coinJar"); // Default image
    break;
    case "coinDecor1":
    case "coinDecor2":
      unequipCoinDecor();
    break;
    default:
      alert("Error Reverting to default");
  }
}
function equipColor(color1, color2, color3, color4, color5) { // String, String
  document.querySelectorAll(".tdCsCoinSpace").forEach(function(currentValue) {
    currentValue.style.backgroundColor = String(color1);
  });
  document.getElementById("entireBoard").style.backgroundColor = String(color2);
  document.getElementById("welcomeSpan").style.backgroundColor = String(color3);
  document.getElementById("helpSectionSpan").style.backgroundColor = String(color3);
  document.getElementById("customerWrapper").style.backgroundColor = String(color3);
  document.getElementById("gameboardSpan").style.backgroundColor = String(color3);
  document.getElementById("shopSpan").style.backgroundColor = String(color4);
  document.querySelectorAll(".tdCoinSpace").forEach(function(currentValue) {
    currentValue.style.backgroundColor = String(color5);
  });
}
function equipCoinJar(imageName) { // String
  document.getElementById("coinBtn").setAttribute("src", "images/" + String(imageName) + ".png");
}
function equipCoinDecor(coinDecor) {
  coinDecorActive = String(coinDecor);
  callingAllCoins(document.querySelectorAll(".tdCsCoinSpace"), coinDecor);
  callingAllCoins(document.querySelectorAll(".tdCoinSpace"), coinDecor);
}
function unequipMe(color) {
  let unequip = document.getElementById(color).lastChild.previousSibling.firstChild.className;
  if(unequip == "equipped") {
    document.getElementById(color).lastChild.previousSibling.firstChild.className = "unlocked";
    document.getElementById(color).lastChild.previousSibling.firstChild.innerHTML = "Equip Me";
  }
}
function unequipCoinDecor() {
  coinDecorActive = "no";
  defaultCoinClass(document.querySelectorAll(".tdCsCoinSpace"));
  defaultCoinClass(document.querySelectorAll(".tdCoinSpace"));
}
function callingAllCoins(tdLocation, coinDecor) {
  tdLocation.forEach(function(currentValue) {
    if(currentValue.firstChild.className != "noCoin") { // Something is there, change it
      currentValue.firstChild.className == `coin ${coinDecor}`;
      if(currentValue.dataset.type == "dollar") {
        currentValue.firstChild.src = `images/${coinDecorImagePath("image")}/dollar.png`;
      } else {
        currentValue.firstChild.src = `images/${coinDecorImagePath("image")}/${currentValue.dataset.type + currentValue.dataset.count}.png`;
      }
    }
  });
}
function defaultCoinClass(tdLocation) {
  tdLocation.forEach(function(currentValue) {
    if(currentValue.firstChild.className != "noCoin") { // Something is there, change it
      currentValue.firstChild.className == "coin";
      if(currentValue.dataset.type == "dollar") {
        currentValue.firstChild.src = `images/dollar.png`;
      } else {
        currentValue.firstChild.src = `images/${currentValue.dataset.type + currentValue.dataset.count}.png`;
      }
    }
  });
}
