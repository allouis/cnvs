/// <reference path="Vector2D.ts" />
/// <reference path="Shape.ts" />
/// <reference path="Arc.ts" />

module cnvs {

  export interface CircleOptions extends ArcOptions {
    radius: number
    startAngle?: number
    endAngle?: number
    clockwise?: boolean
  }

  export class Circle extends Arc {
    
    constructor (options: CircleOptions) {
      options.startAngle = 0;
      options.endAngle = 2 * Math.PI
      options.clockwise = true
      super(options)
    }
  
  }

}
