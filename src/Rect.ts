import Shape = require('./Shape');
import RectOptions = require('./RectOptions');

class Rect extends Shape {
  
  width: number
  height: number

  constructor (options: RectOptions) {
    super(options) 
      this.width = options.width
      this.height = options.height
  }

  render (ctx: any) {
    super.render(ctx)
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fill();
    ctx.stroke();
  }

}

export = Rect
