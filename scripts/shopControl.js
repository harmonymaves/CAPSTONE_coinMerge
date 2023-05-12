document.querySelectorAll(".shopbtn").forEach(occurence => { // function to grab all shop items
  occurence.addEventListener('click', function(){ // Activates click for specific button
    var currentScore = parseInt(document.getElementById("scoreArea").textContent);
    let status = occurence.firstChild.className;
    let points = parseInt(occurence.parentNode.textContent.slice(8));
    if (occurence.parentNode.id == "comingSoon") {
      alert("Sorry, item is not ready for purchase");
    } else {
      if (status == "locked") {
        if(points <= currentScore) {
          document.getElementById("scoreArea").innerHTML = (currentScore - points);
          occurence.firstChild.className = "unlocked";
          occurence.firstChild.innerHTML = "Equip Me";
          //occurence.previousSibling.setAttribute("src", "images/unlock.png");
        } else {
          alert("Purchase Failed: Not enough points");
          console.log("Purchase Failed: Points = " + currentScore);
        }
      } else if(status == "unlocked") {
        // TODO: Unequip = easy
        equippingTime(occurence);
        occurence.firstChild.innerHTML = "Equipped";
        occurence.firstChild.className = "equipped";
      } else if(status == "equipped") {
        //console.log("This item is labeled as equipped");
        // TODO: Revert to default
      } // Else it's messed up so don't do anything
    }
  });
});
function equippingTime(occurence) {
  console.log("The occurence is: " + occurence);
  EquippedMe = String(occurence.parentNode.id)
        switch(EquippedMe) {
          case "color1":
            unequipMe("color2");
            unequipMe("color3");
            equipColor("#a7c92b","#c78e3a");
          break;
          case "color2":
            unequipMe("color1");
            unequipMe("color3");
            equipColor("#1c886f","#93ae30");
          break;
          case "color3":
            unequipMe("color1");
            unequipMe("color2");
            equipColor("#acae4c","#80519c");
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
          default:
            alert("Error Equiping");
        }
}
function equipColor(color1, color2) { // String, String
  tdCoinSpace.forEach(function(currentValue) {
    currentValue.style.backgroundColor = String(color1);
  });
  document.querySelectorAll(".tdCsCoinSpace").forEach(function(currentValue) {
    currentValue.style.backgroundColor = String(color2);
  });
}
function equipCoinJar(imageName) { // String
  document.getElementById("coinBtn").setAttribute("src", "images/" + String(imageName) + ".png");
}
function unequipMe(color) {
  let unequip = document.getElementById(color).lastChild.previousSibling.firstChild.className;
  if(unequip == "equipped") {
    document.getElementById(color).lastChild.previousSibling.firstChild.className = "unlocked";
    document.getElementById(color).lastChild.previousSibling.firstChild.innerHTML = "Equip Me";
  }
}