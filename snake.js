/** @constructor Snake
  * Constructs a new snake object
  */
function Snake() {
  this.width = 15;
  this.height = 15;
  this.snake = [{x:7, y:7},{x:6, y:7},{x:5, y:7}]
  this.direction = 'right';
  this.food = []
  // Create game canvas and context
  var canvas = document.createElement('canvas');
  canvas.width = this.width * this.cellSize;
  canvas.height = this.height * this.cellSize;
  document.body.appendChild(canvas);
  this.ctx = canvas.getContext('2d');

  window.onkeydown = this.handleKeyDown;

  setInterval(() => this.loop(), 1000);
}

Snake.prototype.render = function() {
  this.ctx.fillStyle = "#000";
  this.ctx.fillRect(0, 0,
    this.width * this.cellSize,
    this.height * this.cellSize
  );

  // Draw Snake
  this.ctx.fillStyle = 'ivory';
  this.snake.forEach((segment) => {
    this.ctx.fillRect(segment.x * this.cellSize,
      segment.y * this.cellSize,
      this.cellSize,
      this.cellSize
    );
  });

  // Draw food pellets
  this.ctx.fillStyle = 'gold';
  this.food.forEach((food) => {
    this.ctx.fillRect(
      food.x * this.cellSize,
      food.y * this.cellSize,
      this.cellSize,
      this.cellSize
    );
  });
}

/** @method update
* Updates the snake, moving it forward
*/
Snake.prototype.update = function() {
  var x = this.snake[0].x;
  var y = this.snake[0].y;
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
  // If we move off-board, game is over
  if(x < 0 || x > this.width || y < 0 || y > this.height) {
    return;
  }
  this.snake.pop();
  this.snake.unshift({x: x, y: y});
}

Snake.prototype.loop = function() {
  this.update();
  this.render();
}


new Snake();
