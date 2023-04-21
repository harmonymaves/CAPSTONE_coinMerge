function printCoinProperties(td) {
  // only print if there's a coin
  if (td.childNodes[0].className != "noCoin") {
    const coinToPrint = new coinPile(td.dataset.type, td.dataset.count);
    console.log(coinToPrint.toString());
  }
}


// give all the cells the onClick event

allCells = document.getElementsByClassName("tdCoinSpace");

for (i = 0; i < allCells.length; i++) {
  let cell = allCells[i];
  cell.addEventListener("click", function() {
    printCoinProperties(cell);
  });
}
