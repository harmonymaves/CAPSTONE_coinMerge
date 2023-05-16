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

images.forEach(image => {
  newImage = new Image();
  newImage.src = image;
})