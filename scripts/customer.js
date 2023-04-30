// This file will generate a request for the player to fulfill

// create a new coinPile object so we can fill the data
newCoinPile = new coinPile("", 0)

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

  //All of the console logs are for debugging and is DEV code only
  coinPile1 = coinRequest();
  console.log("First coinPile Type: " + coinPile1.type);
  console.log("Number of coins in first coinPile: " + coinPile1.count);
  console.log("Value of first coinPile: " + coinPile1.getValue());
  console.log("CoinTotal prior to addition of first coinPile: " + coinTotal)
  coinTotal += coinPile1.getValue()
  
  coinPile2 = coinRequest();
  console.log("Second coinPile Type: " + coinPile2.type);
  console.log("Number of coins in second coinPile: " + coinPile2.count);
  console.log("Value of second coinPile: " + coinPile2.getValue());
  console.log("CoinTotal prior to addition of second coinPile: " + coinTotal)
  coinTotal += coinPile2.getValue()

  coinPile3 = coinRequest();
  console.log("Second coinPile Type: " + coinPile3.type);
  console.log("Number of coins in second coinPile: " + coinPile3.count);
  console.log("Value of second coinPile: " + coinPile3.getValue());
  console.log("CoinTotal prior to addition of second coinPile: " + coinTotal)
  coinTotal += coinPile3.getValue()

  console.log(coinTotal);


  csReqest.innerText = "Hi! I need: \n" + coinTotal + "\n in change please!";
  
}

customerRequest();
