
//
// This class will be used to store the data of each coin pile on the game board.
// Every pile on the board will have an instance of this object associated with it
//

class CoinPile {
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

  constructor(type, count) {
    this.type = type;
    this.count = Number(count);
  } // end constructor

  getValue() { // returns the value of the entire pile
    switch (this.type) {
      case "penny":
        return this.count * 1; // multiply the count by the value of 1 coin, to get value of all coins
      case "nickel":
        return this.count * 5;
      case "dime":
        return this.count * 10;
      case "quarter":
        return this.count * 25;
      case "dollar":
        return this.count * 100;
      default:
        return 0; // only would happen if the value is not a valid value.
    } // end switch

  } // end getValue

  getImageName() {
    if (this.type != "dollar") { // type is not dollar
      return this.type + this.count + ".png";
    } else { // type is dollar
      return "dollar.png"; // there is no "dollar1.png", only "dollar.png"
    }
  }

  merge(coinToMerge) { // merges a coin onto this current coin. Returns true on success, false on failure.

    if (coinToMerge.type != this.type) { // coins must be same type.

      // Special case for 2 dime 1 nickel = quarter
      if ((this.type == "dime" && this.count == 2 && coinToMerge.type == "nickel" && coinToMerge.count == 1) || (coinToMerge.type == "dime" && coinToMerge.count == 2 && this.type == "nickel" && this.count == 1)){
        this.count = 1;
        this.type = "quarter";
        playSound("merge");
        return true;
      } else {
        return false;
      }

    } else {
      // types match, merge may be possible
      switch (this.type) {
        case "penny":
          if (this.count + coinToMerge.count <= 5) {
            this.count += coinToMerge.count;
          } else {
            return false;
          }
          break;
        case "nickel":
          if (this.count + coinToMerge.count == 2) {
            this.count += coinToMerge.count;
          } else {
            return false;
          }
          break;
        case "dime":
          if (this.count + coinToMerge.count <= 5) {
            this.count += coinToMerge.count;
          } else {
            return false;
          }
          break;
        case "quarter":
          if (this.count + coinToMerge.count <= 4) {
            this.count += coinToMerge.count;
          } else {
            return false;
          }
          break;
        default:
          return false; // cant merge if type = dollar or invalid coin type.
      }
      this.checkForUpgrade();
      return true;
    } // end if this.type != coinToMerge.type

  } // end merge function

  checkForUpgrade() {
    switch (this.type) {
      case "penny":
        if (this.count == 5) {
          this.count = 1;
          this.type = "nickel";
          playSound("merge");
        } else {
          playSound("place");
        }
        break;
      case "nickel":
        if (this.count == 2) {
          this.count = 1;
          this.type = "dime";
          playSound("merge");
        } else {
          playSound("place");
        }
        break;
      case "dime":
        if (this.count == 5) {
          this.count = 2;
          this.type = "quarter";
          playSound("merge");
        } else {
          playSound("place");
        }
        break;
      case "quarter":
        if (this.count == 4) {
          this.count = 1;
          this.type = "dollar";
          playSound("dollar");
        } else {
          playSound("place");
        }
        break;
      default:
        break;
    }// end switch type
  } // end checkForUpgrade

  toString() {
    //build output string, ignore the indents; they're necessary to get proper indents in the console.
    let stringOutput = `Coin type: ${this.type}
Coin count: ${this.count}
Value of Pile: ${this.getValue()}`;
    
    return stringOutput;
  }

} // end CoinPile class