//Guadalupe López y Agustina Micheli
//Comisión 1


let imag=[];
let textos=[];

let estado;



function preload() {
  for (let i=0; i<13; i++) {
    imag[i] = loadImage("data/imag"+i+".jpg");
  }
  textos = loadStrings("data/textos.txt");
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<13; i++) {
    imag[i].resize(640, 480);
  }
  textSize(18);
  estado = 0;
}


function draw() {
  fill(255);
  //portada
  if (estado === 0) {
    subirImag(imag, 0, 0, 0, 640, 480, LEFT);
    text(textos[0], 250, 350, 600);
    crearBotones(100, 380, 100, 50);
    fill(255);
    text("Creditos", 115, 410);
    crearBotones(width-200, 380, 100, 50);
    fill(255);
    text("Iniciar", width-175, 410);

    //imagen 1
  } else if (estado=== 1) {
    subirImag(imag, 1, 0, 0, 640, 480, LEFT);
    crearBotones(100, 380, 100, 50);
    fill(255);
    text("Volver", 125, 410);
    crearBotones(width-200, 380, 100, 50);
    fill(255);
    text("Siguiente", width-185, 410);

    //imagen 2
  } else if (estado=== 2) {
    subirImag(imag, 2, 0, 0, 640, 480, LEFT);
    crearBotones(100, 380, 100, 50);
    fill(255);
    text("    Ver\nventanilla", 115, 400);
    crearBotones(width-200, 380, 100, 50);
    fill(255);
    text("   Sigue\ntrabajando", width-190, 400);

    //imagen 3
  } else if (estado=== 3) {
    subirImag(imag, 3, 0, 0, 640, 480, LEFT);
    crearBotones(285, 380, 100, 50);
    fill(255);
    text("Reiniciar", 300, 410);

    //imagen 4
  } else if (estado=== 4) {
    subirImag(imag, 4, 0, 0, 640, 480, LEFT);
    crearBotones(285, 380, 100, 50);
    fill(255);
    text("Siguiente", 300, 410);

    //imagen 5
  } else if (estado===5) {
    subirImag(imag, 5, 0, 0, 640, 480, LEFT);
    crearBotones(100, 380, 100, 50);
    fill(255);
    text("Renuncia", 110, 410);
    crearBotones(width-200, 380, 100, 50);
    fill(255);
    text("  Vida \nnormal",width-180, 400);
    
    //imagen 6
  } else  if (estado===6) {
    subirImag(imag, 6, 0, 0, 640, 480, LEFT);
    crearBotones(285, 380, 100, 50);
    fill(255);
    text("Siguiente", 300, 410);
    
    //imagen 7
  } else if (estado===7) {
    subirImag(imag, 7, 0, 0, 640, 480, LEFT);
    crearBotones(285, 380, 100, 50);
    fill(255);
    text("Reiniciar", 300, 410);
    
    //imagen8
  } else if (estado===8) {
    subirImag(imag, 8, 0, 0, 640, 480, LEFT);
    crearBotones(100, 380, 100, 50);
    fill(255);
    text("Volver", 125, 410)
    crearBotones(width-200, 380, 100, 50);
    fill(255);
    text("Siguiente", width-190, 410);
    
    //imagen 9
  } else if (estado===9) {
    subirImag(imag, 9, 0, 0, 640, 480, LEFT);
    crearBotones(100, 380, 100, 50);
    fill(255);
    text("Volver", 125, 410)
    crearBotones(width-200, 380, 100, 50);
    fill(255);
    text("Siguiente", width-190, 410);
    
    //imagen 10
  } else if (estado===10) {
    subirImag(imag, 10, 0, 0, 640, 480, LEFT);
    crearBotones(285, 380, 100, 50);
    fill(255);
    text("Juego", 310, 410);
    
    //imagen 11
  } else if (estado===11) {
    subirImag(imag, 11, 0, 0, 640, 480, LEFT);
    crearBotones(100, 380, 100, 50);
    fill(255);
    text("Reiniciar \n  juego", 110, 400);
    crearBotones(width-200, 380, 100, 50);
    fill(255);
    text("Fin", width-165, 410);
    
    //imagen 12
  } else if (estado===12) {
    subirImag(imag, 12, 0, 0, 640, 480, LEFT);
    crearBotones(100, 380, 100, 50);
    fill(255);
    text("Reiniciar \n  juego", 110, 400);
    crearBotones(width-200, 380, 100, 50);
    fill(255);
    text("Fin", width-165, 410);
    
    //creditos
  } else if (estado === 13) {
    background(101, 192, 209);
    crearBotones(285, 380, 100, 50);
    
    //juego
  } else if (estado===14) {
    background(0);
    crearBotones(100, 380, 100, 50);
    fill(255);
    text("Ganar", 125, 410)
    crearBotones(width-200, 380, 100, 50);
    fill(255);
    text("Perder", width-180, 410);
  }
}

function subirImag(imag, index, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag[index], x, y, ancho, alto);
}

function mousePressed() {
  if (estado === 0) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado=1;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=13;
    }
  } else if (estado===1) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado=2;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=0;
    }
  } else if (estado===2) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado=3;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=4;
    }
  } else if (estado=== 3) {
    if (detectarBoton(285, 380, 100, 50)) {
      estado=0;
    }
  } else if (estado===4) {
    if (detectarBoton(285, 380, 100, 50)) {
      estado=5;
    }
  } else if (estado===5) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado= 7;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=6;
    }
  } else if (estado===6) {
    if (detectarBoton(285, 380, 100, 50)) {
      estado=8;
    }
  } else if (estado===7) {
    if (detectarBoton(285, 380, 100, 50)) {
      estado=0;
    }
  } else if (estado===8) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado= 9;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=6;
    }
  } else if (estado===9) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado= 10;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=8;
    }
  } else if (estado===10) {
    if (detectarBoton(285, 380, 100, 50)) {
      estado=14;
    }
  } else if (estado===11) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado= 0;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=10;
    }
  } else if (estado===12) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado= 0;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=10;
    }
  } else if (estado===13) {
    if (detectarBoton(285, 380, 100, 50)) {
      estado=0;
    }
  } else if (estado===14) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado= 11;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=12;
    }
  }
}
