import Shape = require('./Shape');
import Vector2D = require('./Vector2D');
import RectOptions = require('./RectOptions');

class Rect extends Shape {
  
  width: number
  height: number

  constructor (options: RectOptions) {
    super(options) 
      this.width = options.width
      this.height = options.height
  }

  containsPoint (point: Vector2D) {
    return point.x > this.position.x                &&
           point.x < this.position.x + this.width   &&
           point.y > this.position.y                &&
           point.y < this.position.y + this.height
  }

  render (ctx: any) {
    super.render(ctx)
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fill();
    ctx.stroke();
  }

}

export = Rect
