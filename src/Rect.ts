/// <reference path="Vector2D.ts" />
/// <reference path="Shape.ts" />

module cnvs {

  export interface RectOptions extends ShapeOptions {
    width: number
    height: number
  }

  export class Rect extends Shape {
    
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

}
