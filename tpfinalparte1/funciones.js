function crearBotones(x, y, ancho, alto) {
  noStroke();
  if (detectarBoton(x, y, ancho, alto)) {
    fill(237, 150, 84);
  } else {
    fill(237, 165, 110);
  }
  rect(x, y, ancho, alto, alto/4);
}

function detectarBoton (x, y, ancho, alto) {
  return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
}
