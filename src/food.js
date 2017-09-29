export default class Food {
  constructor() {

  }
  update(position) {
    if(thos.position.x === x && this.position.y ===  y)
    // Fiid gas been eaten.
  }
  render(context) {
    context.save();
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, 1, 1);
    context.restore();
  }
}
