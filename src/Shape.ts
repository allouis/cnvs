import Vector2D = require('./Vector2D');
import Object2D = require('./Object2D');
import ShapeOptions = require('./ShapeOptions');
import minivents = require('minivents');

class Shape implements Object2D {

  public position: Vector2D
  public fill: string
  public stroke: string
  public border: number

  constructor (options: ShapeOptions) {
    this.position = new Vector2D(options.x, options.y);
    this.fill = options.fill || 'black';
    this.stroke = options.stroke || 'black';
    this.border = options.border || 1;
    minivents(this);
  }

  public render (ctx: any) {
    ctx.fillStyle = this.fill;
    ctx.strokeStyle = this.stroke;
    ctx.lineWidth = this.border;
  }

}

export = Shape
