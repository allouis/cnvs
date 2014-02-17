import Shape = require('./Shape');
import ArcOptions = require('./ArcOptions')

class Arc extends Shape {
  
  public radius
  public startAngle
  public endAngle
  public clockwise

  constructor (options: ArcOptions) {
    super(options)
    this.radius = options.radius
    this.startAngle = options.startAngle
    this.endAngle = options.startAngle
    this.clockwise = !!options.clockwise
  }

  public render (ctx: any) {
    super.render(ctx)
    ctx.beginPath();
    ctx.arc(
      this.position.x, 
      this.position.y, 
      this.radius, 
      this.startAngle, 
      this.endAngle,
      !this.clockwise
    );
    ctx.fill();
    ctx.stroke();
  }

}

export = Arc
