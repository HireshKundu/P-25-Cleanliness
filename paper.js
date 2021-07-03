class Paper {
   constructor(x,y,r){

      var options={
         friction:0,
         restitution:0,
         density:1.2

      }

      this.image = loadImage("paper.png");
      this.image.scale = 0.5;
      this.body = Bodies.circle(x,y,r,options);
      this.x = x;
      this.y = y;
      this.r = r;

      World.add(world,this.body);

}

      display(){

         var paperpos = this.body.position;
         var angle = this.body.angle;
         push();
         translate(paperpos.x,paperpos.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.r);
         pop();
         
      }
}