// This file will generate a request for the player to fulfill

// create a new CoinPile object so we can fill the data
newCoinPile = new CoinPile("", 0)

function coinRequest() {

  // generate a random number
  newCoinPile.count = Math.ceil(Math.random() * 4);

  // assign the value based on what our number generated was

  switch (newCoinPile.count) {
    case (1):
      newCoinPile.type= "penny";
      break;
    case (2):
      newCoinPile.type = "nickel";
      break;
    case (3):
      newCoinPile.type = "dime";
      break;
    case (4):
      newCoinPile.type = "quarter";
      break;
    default:
      newCoinPile.type= "penny";
      break;
  }

  // assign a random number of coins for the coin pile based on the type of coin

  switch (newCoinPile.type) {
    case ("penny"):
      newCoinPile.count = Math.ceil(Math.random() * 4);
      break;
    case ("nickel"):
      newCoinPile.count = 1;
      break;
    case ("dime"):
      newCoinPile.count = Math.ceil(Math.random() * 4);
      break;
    case ("quarter"):
      newCoinPile.count = Math.ceil(Math.random() * 3);
      break;
    default:
      newCoinPile.count = Math.ceil(Math.random() * 4);
      break;
  }

  return newCoinPile;
}

function customerImage() {
  customerID = Math.ceil(Math.random() * 5);
  customerPicture = document.getElementById("customerImage");

  switch (customerID) {
    case (1):
      customerPicture.src = `images/customer1.png`;
      break;
    case (2):
      customerPicture.src = `images/customer2.png`;
      break;
    case (3):
      customerPicture.src = `images/customer3.png`;
      break;
    case (4):
      customerPicture.src = `images/customer4.png`;
      break;
    case (5):
      customerPicture.src = `images/customer5.png`;
      break;
    default:
      customerPicture.src = `images/customer1.png`;
      break;
  }
}


function customerRequest() {
  var csReqest = document.getElementById('customerRequest');
  coinTotal = 0;
  
  CoinPile1 = coinRequest();
  coinTotal += CoinPile1.getValue();
  
  CoinPile2 = coinRequest();
  coinTotal += CoinPile2.getValue();

  CoinPile3 = coinRequest();
  coinTotal += CoinPile3.getValue();

  csReqest.innerText = "Hi! I need: \n" +  "$" + (coinTotal / 100).toFixed(2) + "\n in change please!";

  customerImage();  
}

customerRequest();
