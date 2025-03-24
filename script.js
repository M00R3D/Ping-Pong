let bar_a, bar_b, bolita;
let speedX=-1;
let speedY=5;
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
        w:6,
        h:6,
    }
    dibujarObjetos();

}

function draw(){
    background(blue);
    dibujarObjetos();

    bolita.x += speedX;
    bolita.y += speedY;
  

    if(keyIsDown('w')){bar_a.y -= 3;}
    if(keyIsDown('s')){bar_a.y += 3;}
    if(keyIsDown('ArrowUp')){bar_b.y -= 3;}
    if(keyIsDown('ArrowDown')){bar_b.y += 3;}
    if (bolita.y <= 0 || bolita.y >= height) 
        {
            speedY *= -1;
        }
    if (bolita.x <= 0 || bolita.x >= width) 
        {
            speedX *= -1;
        }

    if (bolita.x <= 20 && bolita.x >= bar_a.x+bar_a.w && bolita.y <= bar_a.y + +bar_a.h)
        {
            speedX *= -1;
        }
    
    
}
function keyPressed(){
    console.log(key);

    switch (key) {
        case 'w':
            bar_a.y -= 3;
            break;
        case 's':
            bar_a.y += 3;
            break;
        case 'ArrowUp':
            bar_b.y -= 3;
            break;
        case 'ArrowDown': 
            bar_b.y += 3;
            break;
        default:
            break;
    }

}
