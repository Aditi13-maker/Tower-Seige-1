class Polygon{
  constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0
      }
      
    
      this.body = Bodies.rectangle(x, y, this.width,this.height, options);
    
      //this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.angle.position;
      push();
      translate(this.body.position.x, this.body.position.y);
     rotate(angle)
      rectMode(CENTER);
      strokeWeight(4);
      stroke("purple");
      fill("purple");
      rect( 0, 0,this.width,this.height);
      pop();
    }
}
