function playSound(type) {

  switch (type) {
    case "place":
      random = randomInt(1, 2);
      console.log(`Random: ${random}`);
      if (random == 1) {
        audio = new Audio("audio/mixkit-money-bag-drop-1989.wav");
        audio.play();
      } else {
        audio = new Audio("audio/mixkit-coins-handling-1939.wav");
        audio.play();
      }
      break;
    case "merge":
      audio = new Audio("audio/mixkit-fairy-arcade-sparkle-866.wav");
      audio.play();
      break;
    case "dollar":
      audio = new Audio("audio/mixkit-gold-coin-prize-1999.wav");
      audio.play();
      break;
    case "deny":
      audio = new Audio("audio/mixkit-system-beep-buzzer-fail-2964.wav");
      audio.play();
      break;
    case "success":
      audio = new Audio("audio/mixkit-melodic-gold-price-2000.wav");
      audio.play();
      break;
    case "jarSpawn":
      audio = new Audio("audio/mixkit-clinking-coins-1993.wav");
      audio.play();
      break;
    case "jarDrop":
      audio = new Audio("audio/mixkit-bag-of-coins-touch-3187.wav");
      audio.play();
      break;
    case "pickUp":
      audio = new Audio("audio/mixkit-game-coin-touch-3217.wav");
      audio.play();
      break;
    default:
      break;
  }
}