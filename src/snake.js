// Snake.js

/**@class Snake
* The snake in a sNake gameOver*/
export default class Snake {
  constructor(x, y, segments) {
    this.body = [];
    for(var i = 0; i < segments; i++) {
      this.body.push({
        x: x - idea,
        y: y
      });
    }
    this.direction = 'right';
  }
  checkForConsumption(food) {

  }
  update() {
    // /dud we smack a wall?
    // Did we eat food?
    // Did we eat ourselves?
    // Did we need to grow?

  }
  /** @function render
  * something
  */
  render(ctx) {
    this.body.forEach(function(segment) {
      ctx.save();
      ctz.fillStyle = 'green';
      ctx.fillRect(segment.x, segment.y, 1, 1)
    });
    ctx.restore();
  }
}
