var M = 1;
var N = 1500;


function reset (){
  
  pos = createVector(60,400);
v = createVector(2,6);
B = new Array(N);
C = new Array(M);

 
 
  
 
 for (n = 0; n<N ; n++ ){
     B[n] = new ball(width/2,height-1);
  }
}

function setup() {
  
  createCanvas (windowWidth,windowHeight);


reset();


}

function draw(){
 background(255);


 for (n = 0;n < N ; n++){
   B[n].evolv_draw();
 }
  
  

}
var ball = function(){
  
  this.pos = createVector(width*0.5,height*0.5);
   this.v = p5.Vector.random2D();
    this.v.mult(random(5,5));
    
     this.pas = createVector(width*0.5,height*0.5);
      this.b = p5.Vector.random2D();
       this.b.mult(random(5,5));
       
    
    
  this.evolv_draw = function(){
    
    this.pos.add(this.v);
      this.pas.add(this.b);
        this.diss = this.pas.dist(this.pos);
        
        if (this.diss < width ) {
          
          line(this.pos.x , this.pos.y , this.pas.x , this.pas.y);
          fill(255,0,0);
        }
          if(this.diss > width+ 600){
            
            reset();
            
          }
        
        };
    
  };
  
  
