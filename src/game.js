// game.js

import Snake from './snake';

/** @class Game
  * Represents a snake game
  */
export default class Game {
  constructor() {
    this.snake = new Snake(50, 50, 3);
    this.food = [];
    this.over = false;
    this.input = {
      direction: 'right'
    };
    // Create the back buffer canvas
    this.backBufferCanvas = document.createElement('canvas');
    this.backBufferCanvas.width = 100;
    this.backBufferCanvas.height = 100;
    this.backBufferContext = this.backBufferCanvas.getContext('2d');
    // Create the screen buffer canvas
    this.screenBufferCanvas = document.createElement('canvas');
    this.screenBufferCanvas.width = 100;
    this.screenBufferCanvas.height = 100;
    document.body.appendChild(this.screenBufferCanvas);
    this.screenBufferContext = this.screenBufferCanvas.getContext('2d');
    //Create HTML UI Elements
    var message = document.createElement('div');
    message.id = "message";
    message.textContext = "";
    // Bind class functions
    this.gameOver = this.gameOver.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.loop = this.loop.bind(this);
    //Set up event handlers
    window.onkeydonw =  this.handleKeyDown;
    // Start the game loop
    this.interval = setInterval(this.loop, 500);
  }
  /** @method gameOver
    * Displays a game over message
    */
    gameOver() {
      var message = document.getElemeentById("message");
      message.textContext = "Game Over";
    }

  /** @method handleKeyDown
    * Register when a key is pressedd and changed our input object.
    */
    handleKeyDown(event) {
      event.preventDefault();
      switch(event.key){
        case 'w':
        case 'ArrowUp':
          this.input.direction = 'up';
          break;
        case 'a':
        case 'ArrowLeft':
          this.input.direction = 'left';
          break;
        case 's':
        case 'ArrowDown':
          this.input.direction = 'down';
          break;
        case 'd':
        case 'ArrowRight':
          this.input.direction = 'right';
          break;
      }
    }

  /** @method update
    * Updates the game world.
    */
  update() {
    // dtermine if the snake hit a wall.
    if(!this.over){
    var position = this.snake.getPosition();
    if(position.x < 0 || position.x >= 100 ||
       position.y < 0 || position.y >= 100) {
         this.over = true;
         return;
       }
    this.food.forEach((food) => {
      food.update();
    });
    this.over = this.snake.update();
  }
  }

  /** @method render
    * Renders the game world
    */
  render() {
    this.backBufferContext.fillStyle = '#ccc';
    this.backBufferContext.fillRect(0, 0, 100, 100);
    this.food.forEach((food) => {
      food.render(this.backBufferContext);
    })
    this.snake.render(this.backBufferContext);
    this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
    if(this.over) {
      this.fillStyle = '#fff';
      this.screenBuffreContext.font = "6pt sans-serif";
      this.screenBufferContext.filllText("Game Over", 20, 50);
    }
  }
  loop() {
    this.update();
    this.render();
  }
}
