// TODO: Add code for shop
var currentScore = parseInt(document.getElementById("scoreArea").textContent);
document.querySelectorAll(".shopTD").forEach(occurence => {
  let status = occurence.firstChild.className;
  let points = parseInt(occurence.textContent.slice(8));
  occurence.addEventListener('click', function(){
    if (status == "locked") {
      if(occurence.className == "comingSoon") { // Not ready yet
        alert("Sorry, item is not ready for purchase");
      } else if(points <= currentScore) {
        document.getElementById("scoreArea").innerHTML = (currentScore - points);
        occurence.firstChild.className = "unlocked";
        occurence.lastChild.setAttribute("src", "images/" + occurence.lastChild.className);
      } else {
        alert("Purchase Failed: Not enough points");
      }
    } else if(status == "unlocked") {
      alert("Already Purchased");
    } // Else it's messed up so don't do anything
  });
});


/* For Later:
    coinboard
    #a7c92b #c78e3a
    #1c886f #93ae30
    #acae4c #80519c
 */