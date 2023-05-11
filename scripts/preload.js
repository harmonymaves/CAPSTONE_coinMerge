const sounds = [
  "audio/mixkit-bag-of-coins-touch-3187.wav",
  "audio/mixkit-clinking-coins-1993.wav",
  "audio/mixkit-coins-handling-1939.wav",
  "audio/mixkit-fairy-arcade-sparkle-866.wav",
  "audio/mixkit-game-coin-touch-3217.wav",
  "audio/mixkit-gold-coin-prize-1999.wav",
  "audio/mixkit-melodic-gold-price-2000.wav",
  "audio/mixkit-money-bag-drop-1989.wav",
  "audio/mixkit-system-beep-buzzer-fail-2964.wav"
];

const images = [
  "images/dime1.png",
  "images/dime2.png",
  "images/dime3.png",
  "images/dime4.png",
  "images/dollar.png",
  "images/nickel1.png",
  "images/penny1.png",
  "images/penny2.png",
  "images/penny3.png",
  "images/penny4.png",
  "images/quarter1.png",
  "images/quarter2.png",
  "images/quarter3.png",
  "images/cursors/dime1.png",
  "images/cursors/dime2.png",
  "images/cursors/dime3.png",
  "images/cursors/dime4.png",
  "images/cursors/dollar.png",
  "images/cursors/nickel1.png",
  "images/cursors/penny1.png",
  "images/cursors/penny2.png",
  "images/cursors/penny3.png",
  "images/cursors/penny4.png",
  "images/cursors/quarter1.png",
  "images/cursors/quarter2.png",
  "images/cursors/quarter3.png"
];

sounds.forEach(sound => {
  newSound = new Audio(sound);  
});

images.forEach(image => {
  newImage = new Image();
  newImage.src = image;
})