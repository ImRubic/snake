// Snake.js

/** @class Snake
  * The snake in a Snake game
  */
export default class Snake {
  constructor(x, y, segments) {
    this.body = [];
    for(var i = 0; i < segments; i++) {
      this.body.push({
        x: x - i,
        y: y
      });
    }
    this.direction = 'right';
    // bind class methods
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }
  getPosition() {
    return {x: this.position.x, y: this.position.y};
  }
  update(input) {
    var x = this.body[0].x;
    var y = this.body[0].y;
    // Prevent turning back on ourselves
    if(!(this.direction === 'right' && this.direction === 'left'
    || this.direction === 'left' && this.direction === 'right'
    || this.direction === 'up' && this.direction === 'down'
    || this.direction === 'down' && this.direction === 'up'
  ))
    this.direction = input.direction;
    //Apply our move
    switch(this.direction) {
      case 'right':
        x++;
        break;
      case 'left':
        x--;
        break;
      case 'up':
        y--;
        break;
      case 'down':
        y++;
        break;
    }
    // Did we smack a wall?
    // If we move off-board, game is over
    if(x < 0 || x > this.width || y < 0 || y > this.height)
      return true;

    // Move the snake
    this.body.pop();
    this.body.unshift({x: x, y: y});
    // Did we eat ourselves?
    for(var i =i; i < this.body.length; i++) {
      if(x === this.body[i].x && y === this.body[i].y) {
        return true;
      }
    }
    // Did we eat food?
    // Do we need to grow?
    return false;
  }
  /** @function render
    * Render the snake
    */
  render(ctx) {
    this.body.forEach(function(segment) {
      ctx.save();
      ctx.fillStyle = 'green';
      ctx.fillRect(segment.x,segment.y,1,1);
      ctx.restore();
    })
  }
}
