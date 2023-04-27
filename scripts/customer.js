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

  coinPile1 = coinRequest();
  console.log(coinPile1.type);
  console.log(coinPile1.count);
  console.log(coinPile1.getValue());
  coinPile2 = coinRequest();
  console.log(coinPile2.type);
  console.log(coinPile2.count);
  console.log(coinPile2.getValue());
  coinPile3 = coinRequest();
  console.log(coinPile3.type);
  console.log(coinPile3.count);
  console.log(coinPile3.getValue());

  coinTotal += coinPile1.getValue();
  coinTotal += coinPile2.getValue();
  coinTotal += coinPile3.getValue();


  csReqest.innerText = "Hi! I need: \n" + coinTotal + "\n in change please!";
  
}
customerRequest();
