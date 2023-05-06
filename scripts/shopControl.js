document.querySelectorAll(".shopbtn").forEach(occurence => { // function to grab all shop items
  occurence.addEventListener('click', function(){ // Activates click for specific button
    var currentScore = parseInt(document.getElementById("scoreArea").textContent);
    let status = occurence.previousSibling.className;
    let points = parseInt(occurence.parentNode.textContent.slice(8));
    if (occurence.parentNode.id == "comingSoon") {
      alert("Sorry, item is not ready for purchase");
    } else {
      if (status == "locked") {
        if(points <= currentScore) {
          document.getElementById("scoreArea").innerHTML = (currentScore - points);
          occurence.previousSibling.className = "unlocked";
          occurence.previousSibling.setAttribute("src", "images/unlock.png");
        } else {
          alert("Purchase Failed: Not enough points");
          console.log("Purchase Failed: Points = " + currentScore);
        }
      } else if(status == "unlocked") {
        // TODO: Unequip = easy
        EquippedMe = String(occurence.parentNode.id);
        switch(EquippedMe) {
          case "color1":
            equipColor("#a7c92b","#c78e3a");
          break;
          case "color2":
            equipColor("#1c886f","#93ae30");
          break;
          case "color3":
            equipColor("#acae4c","#80519c");
          break;
          case "coinJar1":
          case "coinJar2":
          case "coinJar3":
            equipCoinJar(EquippedMe);
          break;
          default:
            alert("Error Equiping");
        }
      } // Else it's messed up so don't do anything
    }
  });
});
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