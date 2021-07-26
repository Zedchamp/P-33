class Snow {
  constructor(x, y) {
    var option = {
      friction: 0.001,
      restitution: 0.01,
    };
    this.snow = Bodies.circle(x, y, 5, option);
    this.radius = 5;
    this.image = loadImage("snow5.webp");
    World.add(world, this.snow);
  }
  updateY() {
    if (this.snow.position.y > height)
      Matter.Body.setPosition(this.snow, {
        x: random(0, 700),
        y: random(0, 400),
      });
  }
  display() {
    ellipseMode(CENTER);
   // ellipse(this.snow.position.x, this.snow.position.y, this.radius, this.radius);
    image(
      this.image,
      this.snow.position.x,
      this.snow.position.y,
      this.radius,
      this.radius
    );
  }
}
