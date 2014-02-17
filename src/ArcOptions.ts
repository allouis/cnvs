import ShapeOptions = require('./ShapeOptions');

interface ArcOptions extends ShapeOptions {
  radius: number
  startAngle: number
  endAngle: number
  clockwise?: boolean
}

export = ArcOptions

