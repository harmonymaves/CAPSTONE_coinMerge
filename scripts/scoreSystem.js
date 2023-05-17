function calculateScore (totalScore, CoinPile) {
  mergeValue = 0;
  this.type = CoinPile.type; 
      // depending on the type of CoinPile it is being merged INTO assign a score
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
  updateScore(newScore);
  return newScore;
}

function updateScore(x) {
  scoreArea.innerText = x;
}