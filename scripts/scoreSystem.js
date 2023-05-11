function calculateScore (totalScore, coinPile) {
  mergeValue = 0;
  this.type = coinPile.type; 
      // depending on the type of coinPile it is being merged INTO assign a score
      // i.e. a merge of 2 nickels will be awarded the value of dime
    switch (this.type) { 
      case "penny": 
        mergeValue = 1;
        break;
      case "nickel": 
        mergeValue = 2;
        break;
      case "dime": 
        mergeValue = 3;
        break;
      case "quarter": 
        mergeValue = 4;
        break;
      case "dollar": 
        mergeValue = 5;
        break;
    }
  newScore = totalScore + mergeValue;
  console.log("We are trying to update the score from inside the calculate score function!"); // Dev code remove 
  console.log(newScore); // Dev code remove 
  updateScore(newScore);
  return newScore;
}

function updateScore(x) {
  console.log("We are trying to update the score from inside the Update Score function!"); // Dev code remove 
  scoreArea.innerText = x; 
  console.log(scoreArea.innerText); // Dev code remove 
  console.log(x); // Dev code remove 
}