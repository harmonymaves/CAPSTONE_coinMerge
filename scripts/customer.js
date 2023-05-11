// This file will generate a request for the player to fulfill

// create a new CoinPile object so we can fill the data
newCoinPile = new CoinPile("", 0)

function coinRequest() {

  // generate a random number
  newCoinPile.count = Math.ceil(Math.random() * 4);

  // assign the value based on what our number generated was

  if (newCoinPile.count ==4) {
    newCoinPile.type = "quarter";
  } 
  else if (newCoinPile.count ==3) {
    newCoinPile.type = "dime";
  }
  else if (newCoinPile.count ==2) {
    newCoinPile.type = "nickel";
  }
  else {
    newCoinPile.type= "penny";
  }

  // assign a random number of coins for the coin pile based on the type of coin
  if (newCoinPile.count ==4) {
    newCoinPile.count = Math.ceil(Math.random() * 3);
  } 
  else if (newCoinPile.count ==3) {
    newCoinPile.count = Math.ceil(Math.random() * 2);
  }
  else if (newCoinPile.count ==2) {
    newCoinPile.count = 1;
  }
  else {
    newCoinPile.count = Math.ceil(Math.random() * 4);
  }

  return newCoinPile;
}

function customerRequest() {
  var csReqest = document.getElementById('customerRequest');
  coinTotal = 0;


  CoinPile1 = coinRequest();
  coinTotal += CoinPile1.getValue()
  
  CoinPile2 = coinRequest();
  coinTotal += CoinPile2.getValue()

  CoinPile3 = coinRequest();
  coinTotal += CoinPile3.getValue()

  csReqest.innerText = "Hi! I need: \n" + (coinTotal / 100).toFixed(2) + "\n in change please!";
  
}

customerRequest();
