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
    dibujarObjetos();

    bolita.y -= 1;
    
}
