// This file will generate a request for the player to fulfill

// create a new coinPile object so we can fill the data
newCoinPile = new coinPile("", 0)

// generate a random number
newCoinPile.count = Math.ceil(Math.random() * 4);

function coinRequest() {
  // assign the value based on what our number generated was

  if (newCoinPile.count >=3) {
    newCoinPile.type = "quarter";
  } 
  else if (newCoinPile.count >=2) {
    newCoinPile.type = "dime";
  }
  else if (newCoinPile.count >=1) {
    newCoinPile.type = "nickle";
  }
  else {
    newCoinPile.type= "penny";
  }

  // assign a random number of coins for the coin pile based on the type of coin
  if (newCoinPile.count >=3) {
    newCoinPile.count = Math.ceil(Math.random() * 3);
  } 
  else if (newCoinPile.count >=2) {
    newCoinPile.count = Math.ceil(Math.random() * 2);
  }
  else if (newCoinPile.count >=1) {
    newCoinPile.count = 1;
  }
  else {
    newCoinPile.count = 3;
  }

  return newCoinPile;
}

function customerRequest() {
  var csReqest = document.getElementById('customerRequest');

  coinPile1 = coinRequest().getValue();
  coinPile2 = coinRequest().getValue();
  coinPile3 = coinRequest().getValue();

  coinTotal = (coinPile1 + coinPile2 + coinPile3).toFixed(2);
  if (coinTotal == 0.00) {
    coinPile1 = coinRequest().getValue();
    coinPile2 = coinRequest().getValue();
    coinPile3 = coinRequest().getValue();
  }
  
  csReqest.innerText = "Hi! I need: \n" + coinTotal + "\n in change please!";
  
}
customerRequest();
