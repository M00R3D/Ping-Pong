let bar_a, bar_b, bolita;
function dibujarObjetos(){
    rect(bar_a.x, bar_a.y,bar_a.w, bar_a.h, 6);
    describe('bar_a');

    rect(bar_b.x, bar_b.y,bar_b.w, bar_b.h, 6);
    describe('bar_b');

    ellipse(bolita.x, bolita.y,bolita.w, bolita.h, 6);
    describe('bolita');
}
function setup() {
    createCanvas(500, 500,WEBGL); 
    background(blue);        

    
     bar_a ={
        x:-220,
        y:-60,
        w:20,
        h:150,
    }
    
     bar_b ={
        x:200,
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

    bolita.y -= 1;
    if(keyIsDown('w')){bar_a.y -= 3;}
    if(keyIsDown('s')){bar_a.y += 3;}
    if(keyIsDown('ArrowUp')){bar_b.y -= 3;}
    if(keyIsDown('ArrowDown')){bar_b.y += 3;}
    
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
