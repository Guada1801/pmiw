function dibujarCuadrados(i, j) {
  if ((i+j)%2==0) {
    if (inicial==0) {
      fill(255);
    } else {
      fill(0);
    }
  } else if (inicial==0) {
    fill(0);
  } else {
    fill(255);
  }
  rectMode(CORNER);
  rect(i*tam+400, j*tam, tam, tam);
}

function dibujarRombos(x, y) {
  push();

  let rotar = map(mouseX, 0, width, 0, 200);
  translate(x*tam+400+tam/2, y*tam+tam/2);
  rotate(radians(rotar));

  if ((x+y)%2==0) {
    if (inicial==0) {
      fill(0);
    } else {
      fill(255);
    }
  } else if (inicial==0) {
    fill(255);
  } else {
    fill(0);
  }
  rotate(radians(45));
  rectMode(CENTER);
  rect(0, 0, tam-30, tam-30);
  pop();
}

function mouseMoved() {
  if (mouseX > width/2) {
    mouseEnLaObra = true;
  } else {
    mouseEnLaObra = false;
  }
}
