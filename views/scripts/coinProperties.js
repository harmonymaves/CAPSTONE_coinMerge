function printCoinProperties(td) {
  // only print if there's a coin
  if (td.childNodes[0].className != "noCoin") {
    const coinToPrint = new coinPile(td.dataset.type, td.dataset.count);
    console.log(coinToPrint.toString());
  }
}
