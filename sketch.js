function setup() {
    createCanvas(400, 400);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background("pink");
    } else {
      background("purple");
    }
  
    textSize(40);
    text("😇", xJogador1, 110);
    text("🥺", xJogador2, 350);
    rect(350, 0, 10, 500);
    if (xJogador1 > 370) {
      text("Jogador 1 venceu!", 60, 210);
      noLoop();
    }
    if (xJogador2 > 360) {
      text("Jogador 2 venceu!", 60, 210);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "a") {
      xJogador1 += random(20);
    }
    if (key == "s") {
      xJogador2 += random(20);
    }
  }
  