function setup() {
    createCanvas(500, 500,WEBGL); 
    background(blue);        

    
    const bar_a ={
        x:-220,
        y:-60,
        w:20,
        h:150,
    }
    rect(bar_a.x, bar_a.y,bar_a.w, bar_a.h, 6);
    describe('bar_a');
    
    const bar_b ={
        x:200,
        y:60,
        w:20,
        h:150,
    }
    rect(bar_b.x, bar_b.y,bar_b.w, bar_b.h, 6);
    describe('bar_b');

    const bolita={
        x:60,
        y:60,
        w:6,
        h:6,
    }
    ellipse(bolita.x, bolita.y,bolita.w, bolita.h, 6);
    describe('bolita');
}