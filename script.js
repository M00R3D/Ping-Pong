let bar_a, bar_b, bolita;
let speedX=1;
let speedY=1;
let speedMax=10;

let puntuaje_1 = 0;
let puntuaje_2 = 4;
let segundos=3;
let estado = "espera";

let textoWin="";
function dibujarObjetos(){
    rect(bar_a.x, bar_a.y,bar_a.w, bar_a.h, 6);
    describe('bar_a');

    rect(bar_b.x, bar_b.y,bar_b.w, bar_b.h, 6);
    describe('bar_b');

    ellipse(bolita.x, bolita.y,bolita.w, bolita.h, 6);
    describe('bolita');
}
function setup() {
    createCanvas(500, 500); 
    background(blue);        

    
     bar_a ={
        x:30,
        y:60,
        w:20,
        h:150,
    }
    
     bar_b ={
        x:450,
        y:60,
        w:20,
        h:150,
    }

     bolita={
        x:60,
        y:60,
        w:10,
        h:10,
    }
    dibujarObjetos();

}

function draw(){
    //Dibujar todo
    background(blue);
    dibujarObjetos();
    fill(255);      
    textSize(20);
    
    if(estado=="espera")
        {
            text(segundos+ " segundos para continuar", 100, 150);
            text("presiona R para Reiniciar", 100, 180);
            text(textoWin, 100, 220);
            if (frameCount % 60 === 0 && segundos > 0) {segundos--;}
            if (segundos <= 0) {estado = "jugando";}
        }
    else if (estado === "jugando") {
    text("puntuaje p1:"+ puntuaje_1, 20, 50);
    text("puntuaje p2:"+ puntuaje_2, 300, 50);
    //mover coordenadas de bolita segun la velocidad
    bolita.x += speedX;
    bolita.y += speedY;
  
    //mover barras con w s y flechas
    if(keyIsDown('w')){bar_a.y -= 8;}
    if(keyIsDown('s')){bar_a.y += 8;}
    if(keyIsDown('ArrowUp')){bar_b.y -= 8;}
    if(keyIsDown('ArrowDown')){bar_b.y += 8;}
    
    //velocidad maxima y limite de barra a y b en coordenada y
    speedX = constrain(speedX, -speedMax, speedMax);
    speedY = constrain(speedY, -speedMax, speedMax);
    bar_a.y = constrain(bar_a.y, 0, height - bar_a.h);
    bar_b.y = constrain(bar_b.y, 0, height - bar_b.h);


        // colision techo y suelo
    if (bolita.y <= 0 || bolita.y >= height) 
        {
            speedY *= -1;
            speedY *=1.4;
        }

        // colision paredes laterales
    if (bolita.x <= 0 ) 
        {
            addPointB();
        }
    if ( bolita.x >= width) 
        {
            addPointA();
        }

// colision barra a
        if (bolita.x - bolita.w / 2 <= bar_a.x + bar_a.w && bolita.y >= bar_a.y && bolita.y <= bar_a.y + bar_a.h) 
        {
            speedX *= -1;
            speedX *=1.4;
        }
// colision barra b
        if (bolita.x + bolita.w / 2 >= bar_b.x && bolita.y >= bar_b.y && bolita.y <= bar_b.y + bar_b.h)             
        {
            speedX *= -1;
            speedX *=1.4;
        }
    } else if (estado === "terminado") {
        text("¡" + textoWin + " ganó!", 150, 150);
        text("Presiona R para reiniciar", 130, 200);
        if(keyPressed('ArrowDown')){restart();}
    }
    
}
function keyPressed(){
    console.log(key);

    switch (key) {
        case 'w':
            bar_a.y -= 7;
            break;
        case 's':
            bar_a.y += 7;
            break;
        case 'ArrowUp':
            bar_b.y -= 7;
            break;
        case 'ArrowDown': 
            bar_b.y += 7;
            break;
            case 'r':  // Ahora la tecla R reinicia el juego
            restart();
            break;
        default:
            break;
    }

}
function restart() {
    puntuaje_1 = 0;
    puntuaje_2 = 0;
    textoWin=""
    estado = "espera";
    segundos = 3;

    bar_a = { x: 30, y: 175, w: 20, h: 150 };
    bar_b = { x: 450, y: 175, w: 20, h: 150 };
    bolita = { x: 250, y: 250, w: 10, h: 10 };

    speedX = random([-3, 3]);
    speedY = random([-3, 3]);
}

function addPointA() {
    puntuaje_1 ++;
    estado = "espera";
    segundos = 3;
    bar_a = { x: 30, y: 175, w: 20, h: 150 };
    bar_b = { x: 450, y: 175, w: 20, h: 150 };
    bolita = { x: 250, y: 250, w: 10, h: 10 };
    speedX = random([-3, 3]);
    speedY = random([-3, 3]);
    if (puntuaje_1 >= 5) {
        estado = "terminado";
        textoWin = "Jugador 1";
    } else {
        resetRound("Punto para el jugador 1");
    }
}
function addPointB() {
    puntuaje_2 ++;
    estado = "espera";
    segundos = 3;
    bar_a = { x: 30, y: 175, w: 20, h: 150 };
    bar_b = { x: 450, y: 175, w: 20, h: 150 };
    bolita = { x: 250, y: 250, w: 10, h: 10 };
    speedX = random([-3, 3]);
    speedY = random([-3, 3]);
    if (puntuaje_2 >= 5) {
        estado = "terminado";
        textoWin = "Jugador 2";
    } else {
        resetRound("Punto para el jugador 2");
    }
}


function resetRound(msg) {
    estado = "espera";
    segundos = 3;
    textoWin = msg;

    bar_a = { x: 30, y: 175, w: 20, h: 150 };
    bar_b = { x: 450, y: 175, w: 20, h: 150 };
    bolita = { x: 250, y: 250, w: 10, h: 10 };
    
    speedX = random([-3, 3]);
    speedY = random([-3, 3]);
}