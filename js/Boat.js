class Boat {
  constructor(x, y, width, height, boatPos, boatAnimation) {
  
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
    this.image = loadImage("./assets/boat.png");
    this.animation = boatAnimation

    World.add(world, this.body);
  }
  animate(){
    this.speed += 0.05
  }

  remove(index) {
    setTimeout(() => {
      Matter.World.remove(world,boats[index].body)
      delete boats[index];
    }, 2000);
  }

  

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length)
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index],0,this.boatPosition, this.width, this.height);
    pop();
  }
}
