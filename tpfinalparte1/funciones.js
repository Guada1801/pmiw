function crearBotones(x, y, ancho, alto, texto, xTexto, yTexto) {
  noStroke();
  if (detectarBoton(x, y, ancho, alto)) {
    fill(237, 150, 84);
  } else {
    fill(237, 165, 110);
  }
  rect(x, y, ancho, alto, alto/4);
  fill(255);
  textSize(18);
  text(texto, xTexto, yTexto);

}

function detectarBoton (x, y, ancho, alto) {
  return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
}

function fondoTexto(x, y, ancho, alto, textos, index, anchTexto, altTexto, tamTexto) {
 noStroke();
 fill(116, 114, 114, 190);
 rect(x, y, ancho, alto);
 fill(255);
 textSize(18);
 text(textos, index, anchTexto, altTexto, tamTexto);
 }
 
function subirImag(imag, index, x, y, alinea) {
  imageMode(alinea);
  image(imag[index], x, y);
}
