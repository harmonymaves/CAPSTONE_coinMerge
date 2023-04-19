
//
// This class will be used to store the data of each coin pile on the game board.
// Every pile on the board will have an instance of this object associated with it
//

class coinPile {
  type; // string value, penny nickel dime quarter dollar
  count; // integer value, the number of coins in the pile

  //
  // the above two are formatted so we can easily get the name of the image to
  // represent this pile by doing type + name + ".png"
  //
  // example, if we have a pile of 2 pennies...
  // type = "penny"
  // count = 2
  // the imageName would be to "penny2.png"
  // which is the name of one of our images.
  //

  imageName; // see above ^

  constructor(type, count) {
    this.type = type;
    this.count = count;
    if (type != "dollar") { // type is not dollar
      this.imageName = type + count + ".png";
    } else { // type is dollar
      this.imageName = "dollar.png"; // there is no "dollar1.png", only "dollar.png"
    }
  } // end constructor

  getValue() { // returns the value of the entire pile
    switch (type) {
      case "penny":
        return this.count * 0.01; // multiply the count by the value of 1 coin, to get value of all coins
      case "nickel":
        return this.count * 0.05;
      case "dime":
        return this.count * 0.1;
      case "quarter":
        return this.count * 0.25;
      case "dollar":
        return this.count
      default:
        return 0; // only would happen if the value is not a valid value.
    } // end switch

  } // end getValue

} // end coinPile class