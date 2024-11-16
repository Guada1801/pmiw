//Guadalupe López y Agustina Micheli
//Comisión 1
//https://youtu.be/1KVTsAEHpYw

let pantalla;

function preload() {
  pantalla= new Portada();
  pantalla.preload();
}

function setup() {
  createCanvas(640, 480);
  
}

function draw() {
  pantalla.mostrar();
  
}
