var eingabe, button, nameT;

function setup() {

  // create canvas
  createCanvas(400, 400);

  eingabe = createInput();
  eingabe.position(25, 65);

  button = createButton('OK');
  button.position(eingabe.x + eingabe.width+10, 65);
  button.mousePressed(hallo);
}

function draw() {
  background(240);
  fill('black');
  textAlign(LEFT);
  textSize(20);
  text('Dein Name:', 15, 40);
  if (nameT != null) { 
    fill('teal');
    textAlign(CENTER);
    textSize(40);
    text('Hallo ' + nameT,width/2, height/2); 
  }
}

function hallo() {
  nameT = eingabe.value();
}