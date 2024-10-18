//Guadalupe López y Agustina Micheli
//Comisión 1
//link : https://youtu.be/EWvM7gk5yD8


let imag=[];
let textos=[];
let estado;
let sonido;



function preload() {
  for (let i=0; i<13; i++) {
    imag[i] = loadImage("data/imag"+i+".jpg");
  }
  textos = loadStrings("data/textos.txt");
  sonido = loadSound("data/isla.mp3");
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<13; i++) {
    imag[i].resize(640, 480);
  }

  estado = 0;
}


function draw() {
  textSize(18);

  //portada
  if (estado === 0) {
    subirImag(imag, 0, 0, 0, 640, 480, LEFT);
    crearBotones(100, 380, 100, 50, "Creditos", 115, 410);
    crearBotones(width-200, 380, 100, 50, "Iniciar", width-175, 410);
    crearBotones(width-110, 5, 100, 50, "Musica", width-90, 35);

    textSize(40);
    text(textos[0], 160, 310, 600);

    //imagen 1
  } else if (estado=== 1) {
    subirImag(imag, 1, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[1], 35, 375, 600);
    crearBotones(5, 235, 100, 50, "Volver", 28, 265);
    crearBotones(width-105, 235, 100, 50, "Siguiente", width-90, 265);

    //imagen 2
  } else if (estado=== 2) {
    subirImag(imag, 2, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[2], 25, 368, 600);
    crearBotones(100, 300, 100, 50, "    Ver\nventanilla", 115, 320);
    crearBotones(width-200, 300, 100, 50, "   Sigue\ntrabajando", width-190, 320);

    //imagen 3
  } else if (estado=== 3) {
    subirImag(imag, 3, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[3], 25, 400, 600);
    crearBotones(285, 300, 100, 50, "Reiniciar", 300, 330);

    //imagen 4
  } else if (estado=== 4) {
    subirImag(imag, 4, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[4], 25, 375, 600);
    crearBotones(285, 300, 100, 50, "Siguiente", 300, 330);

    //imagen 5
  } else if (estado===5) {
    subirImag(imag, 5, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[5], 25, 385, 600);
    crearBotones(100, 300, 100, 50, "Renuncia", 110, 330);
    crearBotones(width-200, 300, 100, 50, "  Vida \nnormal", width-180, 320);


    //imagen 6
  } else  if (estado===6) {
    subirImag(imag, 6, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[6], 25, 390, 600);
    crearBotones(285, 300, 100, 50, "Siguiente", 300, 330);

    //imagen 7
  } else if (estado===7) {
    subirImag(imag, 7, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[7], 25, 368, 600);
    crearBotones(285, 300, 100, 50, "Reiniciar", 300, 330);

    //imagen8
  } else if (estado===8) {
    subirImag(imag, 8, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[8], 25, 375, 600);
    crearBotones(100, 300, 100, 50, "Volver", 125, 330);
    crearBotones(width-200, 300, 100, 50, "Siguiente", width-190, 330);

    //imagen 9
  } else if (estado===9) {
    subirImag(imag, 9, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[9], 25, 368, 600);
    crearBotones(100, 300, 100, 50, "Volver", 125, 330);
    crearBotones(width-200, 300, 100, 50, "Siguiente", width-190, 330);

    //imagen 10
  } else if (estado===10) {
    subirImag(imag, 10, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[10], 25, 385, 600);
    crearBotones(285, 300, 100, 50, "Juego", 310, 330);

    //imagen 11
  } else if (estado===11) {
    subirImag(imag, 11, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[12], 25, 385, 600);
    crearBotones(100, 300, 100, 50, "Reiniciar \n  juego", 115, 320);
    crearBotones(width-200, 300, 100, 50, "Fin", width-165, 330);

    //imagen 12
  } else if (estado===12) {
    subirImag(imag, 12, 0, 0, 640, 480, LEFT);
    fondoTexto(0, 360, width, 125);
    fill(255);
    text(textos[11], 25, 368, 600);
    crearBotones(100, 300, 100, 50, "Reiniciar \n  juego", 115, 320);
    crearBotones(width-200, 300, 100, 50, "Fin", width-165, 330);

    //creditos
  } else if (estado === 13) {
    background(101, 192, 209);
    fill(255);
    textSize(25);
    text(textos[13], 180, 50);
    text(textos[15], 200, 150);
    textSize(18);
    text(textos[14], 175, 100);
    text(textos[16], 310, 200);
    crearBotones(285, 380, 100, 50, "Volver", 310, 410);

    //juego
  } else if (estado===14) {
    background(0);
    crearBotones(100, 380, 100, 50, "Ganar", 125, 410);
    crearBotones(width-200, 380, 100, 50, "Perder", width-180, 410);
  }
}

function mousePressed() {

  if (estado === 0) {
    if (detectarBoton(width-200, 380, 100, 50)) {
      estado=1;
    }
    if (detectarBoton(100, 380, 100, 50)) {
      estado=13;
    } else if (detectarBoton(width-110, 5, 100, 50)) {
      if (!sonido.isPlaying()) {
        sonido.loop();
      } else {
        sonido.stop();
      }
    }
  } else if (estado===1) {
    if (detectarBoton(width-105, 235, 100, 50)) {
      estado=2;
    }
    if (detectarBoton(5, 235, 100, 50)) {
      estado=0;
    }
  } else if (estado===2) {
    if (detectarBoton(width-200, 300, 100, 50)) {
      estado=3;
    }
    if (detectarBoton(100, 300, 100, 50)) {
      estado=4;
    }
  } else if (estado=== 3) {
    if (detectarBoton(285, 300, 100, 50)) {
      estado=0;
    }
  } else if (estado===4) {
    if (detectarBoton(285, 300, 100, 50)) {
      estado=5;
    }
  } else if (estado===5) {
    if (detectarBoton(width-200, 300, 100, 50)) {
      estado= 7;
    }
    if (detectarBoton(100, 300, 100, 50)) {
      estado=6;
    }
  } else if (estado===6) {
    if (detectarBoton(285, 300, 100, 50)) {
      estado=8;
    }
  } else if (estado===7) {
    if (detectarBoton(285, 300, 100, 50)) {
      estado=0;
    }
  } else if (estado===8) {
    if (detectarBoton(width-200, 300, 100, 50)) {
      estado= 9;
    }
    if (detectarBoton(100, 300, 100, 50)) {
      estado=6;
    }
  } else if (estado===9) {
    if (detectarBoton(width-200, 300, 100, 50)) {
      estado= 10;
    }
    if (detectarBoton(100, 300, 100, 50)) {
      estado=8;
    }
  } else if (estado===10) {
    if (detectarBoton(285, 300, 100, 50)) {
      estado=14;
    }
  } else if (estado===11) {
    if (detectarBoton(width-200, 300, 100, 50)) {
      estado= 0;
    }
    if (detectarBoton(100, 300, 100, 50)) {
      estado=10;
    }
  } else if (estado===12) {
    if (detectarBoton(width-200, 300, 100, 50)) {
      estado= 0;
    }
    if (detectarBoton(100, 300, 100, 50)) {
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
