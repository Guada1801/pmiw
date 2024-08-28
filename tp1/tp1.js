//Comisión 1
//Guadalupe López
//LEGAJO 119069/5
//ENLACE VIDEO
//https://youtu.be/CaiCSrA0Qf8

let cant;
let tam;
let rotar;
let inicial;
let mouseEnLaObra;

let imagOpArt;

function preload() {
  imagOpArt = loadImage('data/imagOpArt.jpg');
}

function setup() {
  createCanvas(800, 400);

  cant = 4;
  tam = width/2/cant;
  inicial = 0;

  image(imagOpArt, 0, 0, 400, 400);
}


function draw() {
  print(mouseEnLaObra);

  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {

      dibujarCuadrados(i,j);

      for (let x=0; x<cant; x++) {
        for (let y=0; y<cant; y++) {

          dibujarRombos(x,y);
        }
      }
    }
  }
}

function mousePressed() {
  if (inicial==0) {
    inicial=1;
  } else {
    inicial=0;
  }
}

function keyPressed() {
  if (key== 'R') {
  } else if (inicial==1) {
    inicial=0;
  }
}
