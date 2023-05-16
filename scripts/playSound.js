const place1 = new Audio("audio/mixkit-money-bag-drop-1989.wav");
const place2 = new Audio("audio/mixkit-coins-handling-1939.wav");
const merge = new Audio("audio/mixkit-fairy-arcade-sparkle-866.wav");
const dollar = new Audio("audio/mixkit-gold-coin-prize-1999.wav");
const deny = new Audio("audio/mixkit-system-beep-buzzer-fail-2964.wav");
const success = new Audio("audio/mixkit-melodic-gold-price-2000.wav");
const jarSpawn = new Audio("audio/mixkit-clinking-coins-1993.wav");
const jarDrop = new Audio("audio/mixkit-bag-of-coins-touch-3187.wav");
const pickUp = new Audio("audio/mixkit-game-coin-touch-3217.wav");

function playSound(type) {
  switch (type) {
    case "place":
      random = randomInt(1, 2);
      if (random == 1) {
        place1.load();
        place1.play();
      } else {
        place2.load();
        place2.play();
      }
      break;
    case "merge":
      merge.load();
      merge.play();
      break;
    case "dollar":
      dollar.load();
      dollar.play();
      break;
    case "deny":
      deny.load();
      deny.play();
      break;
    case "success":
      success.load();
      success.play();
      break;
    case "jarSpawn":
      jarSpawn.load();
      jarSpawn.play();
      break;
    case "jarDrop":
      jarDrop.load();
      jarDrop.play();
      break;
    case "pickUp":
      pickUp.load();
      pickUp.play();
      break;
    default:
      break;
  }
}