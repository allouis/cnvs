import Arc = require('./Arc');

class Circle extends Arc {
  
  constructor (options: CircleOptions) {
    options.startAngle = 0;
    options.endAngle = 2 * Math.PI
    options.clockwise = true
    super(options)
  }

}
export = Circle
